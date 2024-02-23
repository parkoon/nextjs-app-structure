import { sessionService } from "@/shared/api/session/session.service";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  // session: {
  //   strategy: "jwt",
  // },
  // secret: "jwt",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.

      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("###", credentials);

        if (!credentials) {
          return null;
        }

        try {
          const res = await sessionService.login({
            email: credentials.email,
            password: credentials.password,
          });

          console.log("login success", res);

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
  callbacks: {
    jwt: ({ token, user }) => {
      token.email = user.email;
      token.token = user.token;
      token.username = user.username;
      token.bio = user.bio;
      token.image = user.image || "";

      return token;
    },
    session: ({ user, session }) => {
      session.user = {
        ...user,
        image: user.image || "",
      };

      return session;
    },
  },
});

export { handler as GET, handler as POST };
