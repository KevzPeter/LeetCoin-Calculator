import Head from 'next/head'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center'>
      <Head>
        <title>LeetCoin Calculator</title>
        <meta name="description" content="Calculate how fast you can redeem LeetCode rewards using LeetCoins by completing challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold my-8">LeetCoin Calculator</h1>
      <Form />
      <Footer />
    </div>
  )
}
