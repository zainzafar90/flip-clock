import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useState } from 'react'

import { useTheme } from '@/hooks/useTheme'
import { themes } from '@/constants/themes'

const DynamicTimer = dynamic(() => import('../components/timer'), {
  ssr: false,
})

export default function Home() {
  const [themeIndex, setThemeIndex] = useState(0)

  useTheme(themes[themeIndex])

  return (
    <>
      <Head>
        <title>Flip World Clock</title>
        <meta name="description" content="Flip Clock" />
      </Head>
      <>
        {themes.map((theme, i) => (
          <label key={i}>
            <input
              type="radio"
              name="theme"
              value={i}
              checked={themeIndex === i}
              onChange={() => setThemeIndex(i)}
            />
          </label>
        ))}
        <DynamicTimer />
      </>
    </>
  )
}
