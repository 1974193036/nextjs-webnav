export const revalidate = 60 // Revalidate every 60 seconds

import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  console.log('11111======')
  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // const data = await res.json()
  // return Response.json(data)
  return Response.json([
    {
      id: 1,
      username: 'zs'
    },
    {
      id: 2,
      username: 'lisi'
    }
  ])

  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get('id')
  // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  // const data = await res.json()
  // return Response.json({ data })

  // return Response.json({
  //   a: '1',
  //   b: '2'
  // })

//   return new Response(
//     `<?xml version="1.0" encoding="UTF-8" ?>
// <rss version="2.0">
 
// <channel>
//   <title>Next.js Documentation</title>
//   <link>https://nextjs.org/docs</link>
//   <description>The React Framework for the Web</description>
// </channel>
 
// </rss>`,
//     {
//       headers: {
//         'Content-Type': 'text/xml'
//       }
//     }
//   )

  // redirect('https://nextjs.org/')
}
