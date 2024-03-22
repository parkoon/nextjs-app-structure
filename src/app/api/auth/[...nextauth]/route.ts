import { nextAuthOptions } from "@/shared/libs/next-auth/next-auth.constants";
import NextAuth from "next-auth";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
