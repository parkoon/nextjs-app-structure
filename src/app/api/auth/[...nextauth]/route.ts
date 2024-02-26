import { sessionService } from "@/shared/api/session/session.service";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        try {
          const res = await sessionService.login({
            email: credentials.email,
            password: credentials.password,
          });

          return {
            ...res,
            id: res.email,
          };
        } catch (err) {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
