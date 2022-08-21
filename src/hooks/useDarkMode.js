import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [mode, setMode] = useState()

  /** since useEffect only runs on server side hence we don't need to check if `isBrowser()` */
  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => setMode(e.matches ? 'dark' : 'light'))

    // Setup dark/light mode for the first time
    setMode(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )

    // Remove listener
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', () => {})
    }
  }, [])

  return mode
}
