import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [mode, setMode] = useState()

  useEffect(() => {
    if (mode) {
      setPreferrence(mode)
    }
  }, [mode])

  /** since useEffect only runs on server side hence we don't need to check if `isBrowser()` */
  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => setMode(e.matches ? 'dark' : 'light'))

    const userMode = localStorage.getItem('mode')
    if (userMode) {
      setMode(userMode)
      setPreferrence(userMode)
    } else {
      console.log('HERE')
      const systemMode = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      // Setup dark/light mode for the first time
      setMode(systemMode)
      setPreferrence(systemMode)
    }

    // Remove listener
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [mode, setMode]
}

const setPreferrence = (mode) => {
  localStorage.setItem('mode', mode)
}
