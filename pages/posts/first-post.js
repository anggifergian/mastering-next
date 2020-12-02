import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Baka</title>
      </Head>
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
      <div className='custom'>First Post</div>
    </Layout>
  );
}
