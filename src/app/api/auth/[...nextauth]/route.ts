import { authOptions } from "@/lib/authOption";
import NextAuth from "next-auth";
// adjust path if needed

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
