import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '@/lib/prisma';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, genSalt, hashSync } from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

// created credential provider outside authoptions
const CredentialProvider = CredentialsProvider({
  name: "Credentials",

  credentials: {
    name: { label: "Username", type: "text", placeholder: "jsmith" },
    email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
    password: { label: "Password", type: "password" }
  },

  async authorize(credentials, req) {
    try {
      const { username, email, password } = credentials as any;

      const salt = await genSalt(10);
      const hashedPassword = hashSync(password, salt);

      const existingUser = await db.users.findUnique({ where: { email: email } })

      if (existingUser) {
        const passwordMatch = await compare(password, existingUser?.password)

        if (existingUser?.name === username && passwordMatch) {
          return existingUser
        } else {
          throw new Error('Wrong credentials!')
        }
      }

      const newUser = await db.users.create({
        data: {
          name: username,
          email: email,
          password: hashedPassword,
          image: ''
        }
      })
      console.log(newUser, 'newUser')
      return newUser

    } catch (error: any) {
      console.log(error?.message)
      throw new Error(`${error?.message}`)
    }

  }
})

// created google provider outside authoptions
const Googleprovider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
})



// provided both providers to authoptions
export const authOptions: NextAuthOptions = {
  providers: [CredentialProvider, Googleprovider],
  pages: {
    signIn: '/signin',
  },
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(
        {
          ...token,
          iss: 'furnitees',
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        secret
      );
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token!, secret) as JWT;
      return decodedToken;
    },
  },
  callbacks: {
    async session({ session }) {
      const sessionUser = await db.users.findUnique({
        where: { email: session?.user?.email, }
      });
      // console.log(sessionUser, 'sessionUser')
      if (sessionUser) {
        const updatedSession = {
          ...session,
          user: {
            id: sessionUser.id,
            name: sessionUser.name,
            email: sessionUser.email,
            image: sessionUser.image,

          }
        }
        return updatedSession
      } else {
        return session
      }
    },
    async signIn({ user }) {
      try {
        const userExists = await db.users.findUnique({
          where: {
            email: user.email
          }
        });

        if (!userExists) {
          await db.users.create({
            data: {
              name: user.name,
              email: user.email,
              image: user.image
            }
          });
        }
        return true;
      } catch (error: any) {
        console.log(error);
        return false;
      }
    },
  }
} satisfies NextAuthOptions
