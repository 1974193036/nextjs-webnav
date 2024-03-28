import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { UserAccountNav } from '@/components/user-account-nav'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from "@/components/theme-toggle"


export async function SiteHeader({ navItems }: SidebarProps) {
  // const user = {
  //   // name: 'zs',
  //   // image:
  //   //   'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  //   // email: '1974193036@qq.com'
  // }
  const user = null
  return (
    <header className="sticky top-0 z-40 w-full bg-background dark:border-slate-50/[0.06] lg:border-b lg:border-slate-900/10">
      <div className="container flex h-16 items-center px-4 sm:justify-between sm:space-x-0">
        <MainNav items={[{title: 'Home', href: '/'}]} navItems={navItems} />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-1">
            <Button asChild variant="ghost" size="sm">
              <Link
                href="https://github.com/wangfengyuan/frontend-nav"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </nav>
          <ThemeToggle />
          {user ? (
            <UserAccountNav user={user} />
          ) : (
            <Button asChild variant="secondary" size="sm">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
