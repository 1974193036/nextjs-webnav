import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from '@/components/site-footer'

export default async function HomePage() {
  const navResources = [
    {id: '1', title: 'UI/UX', icon: 'https://webnav.codefe.top/_next/image?url=https%3A%2F%2Fcos.codefe.top%2Fimages%2Fui-ux-icon.png&w=48&q=75'},
    {id: '2', title: 'Dev Tools', icon: 'https://webnav.codefe.top/_next/image?url=https%3A%2F%2Fcos.codefe.top%2Fimages%2Fapp-development-icon.png&w=48&q=75'},
  ]
  const navItems = navResources.map(n => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  })

  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex">
        <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block ">
          Sidebar
        </div>
        <div className="sm:pl-[16rem] w-full">
          <SiteHeader navItems={navItems} />
          LinkContent
          {/* <SiteFooter /> */}
        </div>
      </div>
    </div>
  )
}
