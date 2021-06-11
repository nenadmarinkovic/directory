import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Link from "next/link";

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(0); // how many posts are shown
  return (
    <>
      <Layout>
        <Head>
          <title>Dot Directory</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <Link href="/deutsch">
            <a>Deutsch</a>
          </Link>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug"]);

  return {
    props: { allPosts },
  };
}
