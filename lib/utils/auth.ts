import { NextAuthOptions } from "next-auth";

//Providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import GitlabProvider from "next-auth/providers/gitlab";
import EmailProvider from "next-auth/providers/email";

//Adapter
import { Adapter } from "next-auth/adapters";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

//db init
import clientPromise from "./db";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    collections: {
      Accounts: "accounts",
      Sessions: "sessions",
      Users: "users",
      VerificationTokens: "verificationTokens",
    },
    databaseName: process.env.DB_NAME,
  }) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
} satisfies NextAuthOptions;
