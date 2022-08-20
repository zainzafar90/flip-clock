import dynamic from 'next/dynamic'
import Head from 'next/head'

import { Container } from '@/components/Container'

const DynamicTimer = dynamic(() => import('../components/flip-clock/Timer'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Flip World Clock</title>
        <meta name="description" content="Flip World Clock" />
      </Head>
      <Container>
        <DynamicTimer />
      </Container>
    </>
  )
}
