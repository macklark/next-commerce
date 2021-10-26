import { UserProfile } from "@clerk/nextjs";

import Head from "next/head";

const UserProfilePage = () => {
  return (
    <>
      <Head>
        <title>Next-commerce | User profile</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next commerce" />
        <meta name="author" content="macklark" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserProfile path="/user" routing="path" />
    </>
  );
};

export default UserProfilePage;
