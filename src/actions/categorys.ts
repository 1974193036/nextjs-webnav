'use server'

import { db } from '@/db'
import type { Prisma } from '@prisma/client'

// 获取首页数据
export async function getCategorysApi() {
  const res = await db.category.findMany({
    orderBy: [
      {
        rank: 'asc'
      }
    ],
    include: {
      links: {
        orderBy: {
          rank: 'asc'
        },
        where: {
          public: true,
          status: 1
        }
      }
    }
  })
  return res
}

export type CategoryWithLinks = Prisma.PromiseReturnType<typeof getCategorysApi>

// export async function getCategorysApi() {
//   return [
//     {
//       id: '55f437df-f5d6-4a10-be02-8d4d5b1315c9',
//       icon: '/images/ui-ux.png',
//       title: 'UI/UX',
//       rank: 1,
//       links: [
//         {
//           id: '7ee28f78-dc93-4004-9060-4233249948ac',
//           icon: '/images/uinotes-icon.svg',
//           url: 'https://uinotes.com',
//           title: 'UI Notes',
//           description: '收集了国内109 个App 23208 张截图，用于探索UI 设计趋势、做竞品分析',
//         }
//       ]
//     }
//   ]
// }
