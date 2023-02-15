import Head from 'next/head'
import Banner from './components/banner'
import Empreendimento from './components/empreendimento'
import Header from './components/header/header'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <Header />
      </div>
      <main>
        <Banner />
        <Empreendimento />
      </main>
    </div>
  )
}
