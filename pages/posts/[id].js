import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import Counter from "../../components/counter";
import ReadingMeter from "../../components/ReadingMeter";
import CommentSection from "../../components/CommentSection";
// Get post data and generate page content
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Return paths according to the post ids
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Calculate reading time based on word count
const calculateReadingTime = (contentHtml) => {
  const wordsPerMinute = 200; // Average reading speed
  const text = contentHtml.replace(/<[^>]+>/g, ""); // Remove HTML tags
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return minutes;
};

// Post page component
export default function Post({ postData }) {
  const readingTime = calculateReadingTime(postData.contentHtml);

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.lightText}>
          Estimated Reading Time: {readingTime}{" "}
          {readingTime === 1 ? "minute" : "minutes"}
          <ReadingMeter />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Counter upvote={postData.upvote} downvote={postData.downvote} />
        <CommentSection />
      </article>
    </Layout>
  );
}
