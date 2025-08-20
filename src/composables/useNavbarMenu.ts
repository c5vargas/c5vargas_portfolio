import { ref, onBeforeUnmount, onMounted } from 'vue'
import { useGSAP } from 'gsap-vue'
import gsap from 'gsap'
import SplitType from 'split-type'

export function useNavbarMenu() {
  const menuIsOpen = ref(false)
  const menu = ref<HTMLElement | null>(null)
  const header = ref<HTMLElement | null>(null)
  const overlay = ref<HTMLElement | null>(null)
  const tl = ref<gsap.core.Timeline | null>(null)
  const listItems = ref<SplitType | null>(null)

  const openMenu = () => {
    if (!tl.value) return
    menuIsOpen.value = true
    tl.value.play()
  }

  const closeMenu = () => {
    if (!tl.value) return
    tl.value.reverse()
  }

  const toggleMenu = () => {
    if (menuIsOpen.value) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && menuIsOpen.value) closeMenu()
  }

  useGSAP(
    () => {
      listItems.value = new SplitType('.list-item', { types: 'words,chars' })

      gsap.context(() => {
        if (!menu.value || !overlay.value) return

        gsap.set(menu.value, { yPercent: -100, autoAlpha: 0 })
        gsap.set(overlay.value, { height: 0 })

        if (!listItems.value) return

        tl.value = gsap
          .timeline({
            paused: true,
            defaults: { duration: 0.35, ease: 'power2.out' },
            onReverseComplete: () => {
              menuIsOpen.value = false
            },
          })
          .from(
            listItems.value.chars,
            { y: 50, stagger: 0.02, duration: 0.5, opacity: 0, ease: 'power2.out' },
            0
          )
          .to(overlay.value, { height: '100%' }, 0)
          .to(menu.value, { yPercent: 0, autoAlpha: 1 }, 0)
      })
    },
    { scope: header }
  )

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
  })

  return {
    menuIsOpen,
    menu,
    overlay,
    header,
    openMenu,
    closeMenu,
    toggleMenu,
  }
}
