import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useState } from 'react'

import { themes } from '@/constants/themes'
import { useTheme } from '@/hooks/useTheme'
import { useDarkMode } from '@/hooks/useDarkMode'
import { ThemeSwitch } from '@/components/theme-switch'

const DynamicTimer = dynamic(() => import('../components/timer'), {
  ssr: false,
})

export default function Home() {
  const mode = useDarkMode()
  const [theme, setTheme] = useState('default')

  useTheme(themes[theme][mode])

  return (
    <>
      <Head>
        <title>Flip World Clock</title>
        <meta name="description" content="Flip Clock" />
      </Head>
      <>
        <DynamicTimer />
        <ThemeSwitch selectedTheme={theme} onThemeSelect={(e) => setTheme(e)} />
      </>
    </>
  )
}
