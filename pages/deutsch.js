import Container from "../components/container";
import MoreLession from "../components/more-lessions";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllDeutsch } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(0); // how many posts are shown
  return (
    <>
      <Layout>
        <Head>
          <title>.directory</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreLession posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllDeutsch(["title", "date", "slug"]);

  return {
    props: { allPosts },
  };
}
