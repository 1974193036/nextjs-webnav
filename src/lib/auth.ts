import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/db'
import { compare } from 'bcrypt'

const {
  handlers: { GET, POST },
  auth,
  // signIn,
  // signOut
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      // @ts-ignore
      async authorize(credentials: UserModel) {
        const { email, password } = credentials
        if (!email || !password) {
          throw new Error('Missing username or password')
        }
        const user = await db.user.findUnique({
          where: {
            email: credentials.email!
          }
        })
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password!))) {
          throw new Error('Invalid username or password')
        }
        return user
      }
    })
  ],
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    // 通常不需要这一步，这里我们正在修复nextauth中的一个bug
    async session({ session, user }: any) {
      if (session && user) {
        session.user.id = user.id
      }
      return session
    }
  }
})

export { auth, GET, POST }
