import { type NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

const ProfilePage: NextPage = () => {

  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "estebaner",
  });
  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>404</div>;

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>
          {data.username}
        </div>
      </main>
    </>
  );
};

import { createProxySSGHelpers } from '@trpc/react-query/ssg';


export default ProfilePage;
