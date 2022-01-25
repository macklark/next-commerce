// Nextjs imports
import Head from "next/head";

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <>
    <Head>
      <title>Sign in | Next Commerce</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Sign in for Next Commerce" />
    </Head>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </>
);

export default SignInPage;
