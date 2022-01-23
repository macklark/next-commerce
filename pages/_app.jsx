// Nextjs imports
import { useRouter } from "next/router";

// Chakra provider
import { ChakraProvider } from "@chakra-ui/react";

// Clerk auth imports
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

const publicPages = [
  "/",
  "/sign-in/[[...index]]",
  "/sign-up/[[...index]]",
  "/products/[id]",
  "/result",
];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const isPublic = publicPages.includes(pathname);
  return (
    <ClerkProvider>
      {isPublic ? (
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      ) : (
        <ChakraProvider>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </ChakraProvider>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
