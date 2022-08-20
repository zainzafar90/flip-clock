import { useEffect } from 'react'

// ref: https://usehooks.com/useTheme
export const useTheme = (theme) => {
  useEffect(
    () => {
      // Iterate through each value in theme object
      for (const key in theme) {
        // Update css variables in document's root element
        document.documentElement.style.setProperty(`--${key}`, theme[key])
      }
    },
    [theme] // Only call again if theme object reference changes
  )
}
