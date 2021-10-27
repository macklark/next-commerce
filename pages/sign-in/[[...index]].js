import { SignIn } from "@clerk/nextjs";
import { Box } from "@chakra-ui/react";

import Head from "next/head";

const SignInPage = () => {
  return (
    <Box my="10">
      <Head>
        <title>Next-commerce | Sign In</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next commerce" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Box>
  );
};

export default SignInPage;
