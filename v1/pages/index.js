import Head from 'next/head'
import Header  from '../components/Header/Header'

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-600 h-screen">
      <Head>
        <title>shop v1</title>
        <meta name="description" content="shop v1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

    </div>
  )
}
