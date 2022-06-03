import Head from 'next/head'

const Header = ({ title }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="Learn how to build a personal website using Next.js" />

    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
  </Head>
)

export default Header