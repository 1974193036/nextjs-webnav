interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

type NavItems = {
  id: string
  title: string
  icon: string
}[]

interface SidebarProps {
  className?: string
  navItems: NavItems
}
