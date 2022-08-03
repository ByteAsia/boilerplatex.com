import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroSections from '../components/HeroSections'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BoilerplateX</title>
        <meta name="description" content="BoilerplateX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSections />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://boilerplatex.com">BoilerplateX!</a>
        </h1>

        <p className={styles.description}>
          Github {' '}
          <code className={styles.code}><a href="https://github.com/BoilerplateX">https://github.com/BoilerplateX</a></code>
        </p>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
