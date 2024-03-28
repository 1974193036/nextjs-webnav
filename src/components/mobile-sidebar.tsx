// import { Category } from "@prisma/client"
import { Sidebar } from './sidebar'
import { cn } from '@/lib/utils'

interface SidebarProps {
  className?: string
  navItems: NavItems
  setShowMobileSidebar: Function
  showMobileSidebar: boolean
}

export function MobileSidebar({
  navItems,
  showMobileSidebar,
  setShowMobileSidebar
}: SidebarProps) {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 -translate-x-60 z-20 mx-0 h-screen w-60 transition-all duration-300',
          showMobileSidebar && 'translate-x-0',
        )}
      >
        <Sidebar navItems={navItems} />
      </div>

      {showMobileSidebar && (
        <div
          className="fixed inset-0 z-10 h-full w-full bg-gray-900/50 dark:bg-gray-900/50"
          onClick={() => setShowMobileSidebar(false)}
        ></div>
      )}
    </>
  )
}
