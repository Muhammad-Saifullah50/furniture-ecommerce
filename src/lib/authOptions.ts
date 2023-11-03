import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '@/lib/prisma';
import CredentialsProvider from "next-auth/providers/credentials";
import { genSalt, hashSync } from 'bcrypt';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {

        const { username, email, password } = credentials as any;

        const salt = await genSalt(10);
        const hashedPassword = hashSync(password, salt);

        const existingUser = await db.users.findUnique({ where: { email: email } })

        if (!existingUser) {
          const user = await db.users.create({
            data: {
              username: username,
              email: email,
              password: hashedPassword,
              image: ''
            }
          })
          return user
        }
        else return existingUser
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
} satisfies NextAuthOptions;
