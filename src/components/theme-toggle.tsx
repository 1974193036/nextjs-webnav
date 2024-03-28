'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import type { MouseEvent } from 'react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  async function switchTheme(event: MouseEvent) {
    // 浏览器不支持 View Transitions 时的回退方案：
    // @ts-ignore
    if (!document.startViewTransition) {
      setTheme(theme === 'light' ? 'dark' : 'light')
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    let isDark: boolean

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      isDark = !document.documentElement.classList.contains('light')
      setTheme(theme === 'light' ? 'dark' : 'light')
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      document.documentElement.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)'
        }
      )
    })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={(e: MouseEvent) => switchTheme(e)}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
