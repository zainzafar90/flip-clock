import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useState } from 'react'

import { themes } from '@/constants/themes'
import { useTheme } from '@/hooks/useTheme'
import { useDarkMode } from '@/hooks/useDarkMode'

const DynamicTimer = dynamic(() => import('../components/timer'), {
  ssr: false,
})

export default function Home() {
  const mode = useDarkMode()
  const [themeIndex, setThemeIndex] = useState(0)

  useTheme(themes[themeIndex][mode])

  return (
    <>
      <Head>
        <title>Flip World Clock</title>
        <meta name="description" content="Flip Clock" />
      </Head>
      <>
        <div className="flex items-center space-x-4">
          {themes.map((theme, i) => (
            <label key={i} className=" text-white">
              [theme {i}]
              <input
                type="radio"
                name="theme"
                value={i}
                checked={themeIndex === i}
                onChange={() => setThemeIndex(i)}
              />
            </label>
          ))}
        </div>
        <DynamicTimer />
      </>
    </>
  )
}
