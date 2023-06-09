import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";

import Image from "next/image";
import { PageLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";
import { PostView } from "~/components/postview";
import { generateSSGHelper } from "~/server/helpers/ssgHelper";

const ProfileFeed = (props: { userId: string }) => {
  const { data, isLoading } = api.posts.getPostByUserId.useQuery({ userId: props.userId });

  if (isLoading) return <LoadingPage />;

  if (!data || data.length === 0) return <div>User has not posted</div>;

  return <div className="flex flex-col">
    {data.map((fullPost) => (
      <PostView {...fullPost} key={fullPost.post.id} />
    ))}
  </div>
}

const ProfilePage: NextPage<{ username: string }> = ({ username }) => {

  const { data } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (!data) return <div>404</div>;

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <PageLayout>
        <div className="relative h-48 bg-slate-600">
          <Image
            src={data.profileImageUrl}
            alt={`${data.username ?? ""}'s profile pic`}
            width={320}
            height={320}
            className="absolute bottom-0 left-0 -mb-[80px] ml-4 rounded-full border-4 border-black bg-black w-40 h-40 "
          />
        </div>
        <div className="h-[80px]"></div>

        <div className="p-6 text-2xl font-bold">
          {`@${data.username ?? ""}`}
        </div>
        <div className="w-full border-b border-slate-400" />
        <ProfileFeed userId={data.id} />
      </PageLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ssg = generateSSGHelper();

  const slug = context.params?.slug;

  if (typeof slug !== "string") throw new Error("no slug");

  const username = slug.replace("@", "");

  await ssg.profile.getUserByUsername.prefetch({ username });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      username
    },
  }
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" }
}


export default ProfilePage;
