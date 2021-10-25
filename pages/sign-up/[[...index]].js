import { SignUp } from "@clerk/nextjs";

import Head from "next/head";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Next-commerce | Sign Up</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next commerce" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
    </>
  );
};

export default SignUpPage;
