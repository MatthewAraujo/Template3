import Head from 'next/head'
import Banner from './components/banner'
import Empreendimento from './components/empreendimento'
import Header from './components/header/header'
import Localizacao from './components/Localizacao'
import Plantas from './components/plantas'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <aside>
        <Header />
      </aside>
      <main>
        <Banner />
        {/* <Empreendimento /> */}
        <Plantas />
        <Localizacao />
      </main>
    </div>
  )
}
