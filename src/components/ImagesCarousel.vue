<template>
  <section
    class="[container-type:inline-size] relative w-full touch-pan-y select-none"
    role="region"
    :aria-label="ariaLabel"
    aria-roledescription="carousel"
    @mouseenter="pause()"
    @mouseleave="resume()"
    @focusin="pause()"
    @focusout="resume()"
  >
    <!-- Viewport -->
    <div class="w-full overflow-hidden px-[10cqw]" ref="viewportEl">
      <div
        class="flex w-full"
        ref="trackEl"
        :style="trackStyle"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @pointercancel="onPointerCancel"
        @pointermove="onPointerMove"
      >
        <div
          v-if="loop"
          class="relative aspect-[16/9] shrink-0 grow-0 basis-[80cqw] overflow-hidden"
          :key="'clone-head'"
        >
          <img :src="images[images.length - 1]" class="h-full w-full object-cover" />
        </div>

        <div
          v-for="(src, i) in images"
          :key="i"
          class="relative aspect-[16/9] shrink-0 grow-0 basis-[80cqw] overflow-hidden"
        >
          <img :src="src" class="h-full w-full object-cover" />
        </div>

        <div
          v-if="loop"
          class="relative aspect-[16/9] shrink-0 grow-0 basis-[80cqw] overflow-hidden"
          :key="'clone-tail'"
        >
          <img :src="images[0]" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="pointer-events-none absolute inset-0 flex items-center justify-between">
      <button
        type="button"
        class="pointer-events-auto grid h-10 w-10 cursor-pointer place-items-center rounded-full border-0 bg-black/35 text-[1.6rem] text-white focus-visible:outline-2 focus-visible:outline-white"
        @click="prev"
        :aria-label="`Anterior`"
      >
        ‹
      </button>
      <button
        type="button"
        class="pointer-events-auto grid h-10 w-10 cursor-pointer place-items-center rounded-full border-0 bg-black/35 text-[1.6rem] text-white focus-visible:outline-2 focus-visible:outline-white"
        @click="next"
        :aria-label="`Siguiente`"
      >
        ›
      </button>
    </div>

    <!-- Dots -->
    <div
      class="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-2"
      role="tablist"
      aria-label="Indicadores"
    >
      <button
        v-for="(src, i) in images"
        :key="i"
        role="tab"
        class="h-2.5 w-2.5 cursor-pointer rounded-full border-0 bg-white/50 aria-selected:bg-white"
        :aria-selected="realIndex === i"
        :class="{ 'bg-white': realIndex === i }"
        @click="goTo(i)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'

type Props = {
  images: string[]
  autoplay?: boolean
  interval?: number
  loop?: boolean
  ariaLabel?: string
  transitionMs?: number
  snapThreshold?: number // % del ancho
}
const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  interval: 4000,
  loop: true,
  ariaLabel: 'Carrusel de imágenes',
  transitionMs: 320,
  snapThreshold: 0.18,
})

const viewportEl = ref<HTMLDivElement | null>(null)
const trackEl = ref<HTMLDivElement | null>(null)

const state = reactive({
  width: 0,
  index: 0, // incluye clones (si loop)
  animating: false,
  // drag
  dragging: false,
  startX: 0,
  deltaX: 0,
  lastX: 0,
  lastT: 0,
  velocity: 0,
  rafId: 0 as number | 0,
})

const total = computed(() => props.images.length)
const loop = computed(() => props.loop && total.value > 1)
const slideCountWithClones = computed(() => (loop.value ? total.value + 2 : total.value))

// índice "real" para UI (0..n-1)
const realIndex = computed(() => {
  if (!loop.value) return state.index
  if (state.index === 0) return total.value - 1
  if (state.index === slideCountWithClones.value - 1) return 0
  return state.index - 1
})

const prefersReducedMotion =
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

function measure() {
  state.width = viewportEl.value?.clientWidth ?? 0
}

let ro: ResizeObserver | null = null
onMounted(() => {
  measure()
  ro = new ResizeObserver(measure)
  if (viewportEl.value) ro.observe(viewportEl.value)
  // arranque en slide 1 si loop para quedar en el primero real
  state.index = loop.value ? 1 : 0

  // autoplay
  startAutoplay()
  // teclado
  window.addEventListener('keydown', onKey)
})

onUnmounted(() => {
  stopAutoplay()
  if (ro && viewportEl.value) ro.unobserve(viewportEl.value)
  window.removeEventListener('keydown', onKey)
  cancelRaf()
})

function translateXForIndex(idx: number) {
  const slideWidth = state.width * 0.8
  return -(idx * slideWidth) + (state.dragging ? state.deltaX : 0)
}

const trackStyle = computed(() => {
  const ms = state.animating && !state.dragging ? props.transitionMs : 0
  return {
    transform: `translate3d(${translateXForIndex(state.index)}px,0,0)`,
    transition: ms ? `transform ${ms}ms cubic-bezier(.22,.61,.36,1)` : 'none',
    willChange: state.dragging ? 'transform' : 'auto',
  }
})

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val))
}

function next() {
  snapTo(state.index + 1)
}
function prev() {
  snapTo(state.index - 1)
}
function goTo(real: number) {
  // convierte real (0..n-1) a índice con clones
  const target = loop.value ? real + 1 : real
  snapTo(target)
}

function snapTo(target: number, opts: { immediate?: boolean } = {}) {
  if (!trackEl.value) return
  state.animating = !opts.immediate
  state.index = target

  // post-animación: corrige clones para loop infinito
  const after = () => {
    if (!loop.value) return
    if (state.index === 0) {
      state.animating = false
      state.index = total.value
    } else if (state.index === slideCountWithClones.value - 1) {
      state.animating = false
      state.index = 1
    }
  }

  if (state.animating) {
    window.setTimeout(after, props.transitionMs)
  } else {
    after()
  }
}

// ===== Drag con Pointer Events + rAF =====
function onPointerDown(e: PointerEvent) {
  if (e.button !== 0 && e.pointerType === 'mouse') return

  const target = e.currentTarget as HTMLElement
  target.setPointerCapture(e.pointerId)

  pause()
  state.dragging = true
  state.startX = e.clientX
  state.deltaX = 0
  state.lastX = e.clientX
  state.lastT = performance.now()
  state.velocity = 0
  cancelRaf()
  // quita transición mientras se arrastra
  state.animating = false
}

function onPointerMove(e: PointerEvent) {
  if (!state.dragging) return
  const now = performance.now()
  const dx = e.clientX - state.startX

  // limitar overscroll cuando no hay loop
  let limDx = dx
  if (!loop.value) {
    const atFirst = state.index === 0
    const atLast = state.index === slideCountWithClones.value - 1
    if ((atFirst && dx > 0) || (atLast && dx < 0)) {
      limDx = dx * 0.35 // resistencia
    }
  }

  state.deltaX = limDx

  // calcular velocidad (px/ms)
  const dt = now - state.lastT || 16
  const vx = (e.clientX - state.lastX) / dt
  state.velocity = 0.8 * state.velocity + 0.2 * vx // EMA
  state.lastX = e.clientX
  state.lastT = now

  scheduleRaf()
}

function onPointerUp() {
  endDrag()
}
function onPointerCancel() {
  endDrag()
}

function endDrag() {
  if (!state.dragging) return
  state.dragging = false

  const traveled = state.deltaX
  const shouldSlideByVelocity = Math.abs(state.velocity) > 0.5
  const shouldSlideByDistance = Math.abs(traveled) > props.snapThreshold * state.width

  let target = state.index
  if (shouldSlideByVelocity || shouldSlideByDistance) {
    target = state.index + (traveled < 0 ? 1 : -1)
  }

  state.deltaX = 0
  snapTo(clamp(target, 0, slideCountWithClones.value - 1))
  resume()
}

function scheduleRaf() {
  if (state.rafId) return
  state.rafId = requestAnimationFrame(() => {
    state.rafId = 0
    // Solo recalculamos el estilo computado; Vue se encarga del render
  })
}
function cancelRaf() {
  if (state.rafId) {
    cancelAnimationFrame(state.rafId)
    state.rafId = 0
  }
}

// ===== Autoplay =====
let timer: number | null = null
function startAutoplay() {
  if (!props.autoplay || prefersReducedMotion || total.value <= 1) return
  stopAutoplay()
  timer = window.setInterval(() => next(), props.interval)
}
function stopAutoplay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}
function pause() {
  stopAutoplay()
}
function resume() {
  startAutoplay()
}

// teclado
function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

// si cambia autoplay/interval en runtime
watch(() => [props.autoplay, props.interval] as const, startAutoplay)
</script>
