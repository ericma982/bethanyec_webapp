import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'

import Sermon from '../components/Sermon'
import TwoSection from '../components/templates/Two-Section'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Bethany EC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Hero />


      </div>


      <TwoSection />

    </div >
  )
}
