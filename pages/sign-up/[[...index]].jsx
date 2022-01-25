// Nextjs imports
import Head from "next/head";

import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <>
    <Head>
      <title>Sign up | Next Commerce</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Sign up for Next Commerce" />
    </Head>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </>
);

export default SignUpPage;
