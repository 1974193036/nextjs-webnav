'use client'

import { useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserAccountNav } from '@/components/user-account-nav'

/**
 * header组件中如果使用到了服务端获取用户信息（const session = await auth()）
 * 一旦涉及到了cookie的设置和读取，header组件是放在layout中，所有页面打包后都是动态路由页面，连404页面都不是静态的了
 *
 * 我们使用一个客户端组件来获取用户信息来优化
 */


export function HeaderAuth() {
  const session = useSession()

  let authContent: React.ReactNode
  if (session.status === 'loading') {
    authContent = null
  } else if (session?.data?.user) {
    authContent = <UserAccountNav user={session?.data?.user} />
  } else {
    authContent = (
      <Button asChild variant="secondary" size="sm">
        <Link href="/login">Login</Link>
      </Button>
    )
  }

  return authContent
}
