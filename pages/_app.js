import { ChakraProvider } from "@chakra-ui/react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider>
      {isPublicPage ? (
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
