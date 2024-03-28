import { db } from '@/db'
import type { Prisma } from '@prisma/client'

export async function getCategorys() {
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

export type CategoryWithLinks = Prisma.PromiseReturnType<typeof getCategorys>
