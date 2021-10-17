import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { passwordChecker } from "../../../lib/hasher";
import { databaseConnection } from "../../../lib/helper";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await databaseConnection();

        const user = await client.db().collection("users").findOne({
          email: credentials.email,
        });

        console.log(user);

        if (!user) {
          client.close();
          throw new Error("User not found");
        }

        const isValid = await passwordChecker(
          credentials.password,
          user.hashPassword
        );

        if (!isValid) {
          client.close();
          throw new Error("Invalid password");
        }

        client.close();

        return {
          email: user.email,
        };
      },
    }),
  ],
});
