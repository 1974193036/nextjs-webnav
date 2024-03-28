import { SiteHeader } from '@/components/site-header'
import { Sidebar } from '@/components/sidebar'
import { SiteFooter } from '@/components/site-footer'
import { LinkContent } from '@/components/link-content'
import { getCategorysApi } from '@/actions'

export default async function HomePage() {
  const dataSource = await getCategorysApi()
  console.log(dataSource)

  const navItems = dataSource.map((n) => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id
    }
  })

  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex">
        <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block ">
          <Sidebar navItems={navItems} />
        </div>
        <div className="sm:pl-[16rem] w-full">
          <SiteHeader navItems={navItems} />
          <LinkContent source={dataSource} />
          <SiteFooter />
        </div>
      </div>
    </div>
  )
}
