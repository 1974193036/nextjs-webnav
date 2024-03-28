import { Category, Link, User } from '@prisma/client'

declare global {
  interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
  }

  interface SidebarProps {
    className?: string
    navItems: Pick<Category, 'title' | 'icon' | 'id'>[]
  }

  type SiteLink = Link

  type UserModel = User
}
