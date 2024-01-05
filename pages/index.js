import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LeetCoin Calculator</title>
        <meta name="description" content="Calculate how fast you can redeem LeetCode rewards using LeetCoins by completing challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>LeetCoin Calculator</h1>
      <Form />
      <Footer />
    </div>
  )
}
