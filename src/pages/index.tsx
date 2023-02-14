import Head from 'next/head'
import Header from './components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <Header />
      </div>
    </>
  )
}
