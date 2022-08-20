import dynamic from 'next/dynamic'
import Head from 'next/head'

const DynamicTimer = dynamic(() => import('../components/timer'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Flip World Clock</title>
        <meta name="description" content="Flip Clock" />
      </Head>
      <DynamicTimer />
    </>
  )
}
