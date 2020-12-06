import Layout from '../../components/layout'
import getAllPostsIds, { getPostsData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const postData = getPostsData(params.id)
  return {
    props: { postData },
  }
}
