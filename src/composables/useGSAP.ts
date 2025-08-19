import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

interface UseGSAPConfig {
  scope?: Element | string | null
}

const isConfig = (value: unknown): value is UseGSAPConfig =>
  !!value && typeof value === 'object' && !Array.isArray(value)

let _gsap: typeof gsap = gsap

export function useGSAP(
  callback?: ((context: ReturnType<typeof gsap.context>) => void) | UseGSAPConfig,
  maybeConfig?: UseGSAPConfig
) {
  let config: UseGSAPConfig = {}
  let cb: ((context: ReturnType<typeof gsap.context>) => void) | undefined

  if (isConfig(callback)) {
    config = callback
  } else {
    cb = callback
    config = maybeConfig ?? {}
  }

  const context = ref<ReturnType<typeof gsap.context> | null>(null)

  const contextSafe = (func: () => void) => {
    if (context.value) {
      context.value.add(func)
    }
  }

  onMounted(() => {
    context.value = _gsap.context(() => {
      if (cb) {
        cb(context.value as ReturnType<typeof gsap.context>)
      }
    }, config.scope || '')
  })

  onUnmounted(() => {
    context.value?.revert()
    context.value = null
  })

  return {
    context,
    contextSafe,
  }
}

useGSAP.register = (core: typeof gsap) => {
  _gsap = core
}

useGSAP.headless = true
