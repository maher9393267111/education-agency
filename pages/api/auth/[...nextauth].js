
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// Prisma adapter for NextAuth, optional and can be removed
//import { PrismaAdapter } from '@next-auth/prisma-adapter'
//import { env } from '../../../env/server.mjs'

//import { env } from '../../../env/server.mjs'
//import { prisma } from '../../../server/db/client'

export const authOptions= {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user .id = user?.id
        session.user.name = user?.name
      }
      return session
    },
  },
 // debug: true
  // Configure one or more authentication providers
 // adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
       
     
    clientId: process.env.NEXT_GOOGLE_KEY,
    clientSecret:  process.env.NEXT_SECRET,

    authorization: {
              params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
              }
          }
    

    }),




  ],
 
  secret: "STRING1211212",

}

export default NextAuth(authOptions)