import { useState } from 'react'

import { themes } from '@/constants/themes'
import { getThemePaletteColor } from '@/utils/common'

export const ThemeSwitch = ({
  selectedTheme,
  selectedMode,
  onThemeSelect,
  onModeSelect,
}) => {
  const [showPalette, setShowPalette] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 flex items-end justify-center space-x-2">
      {showPalette && (
        <div className="flex items-center space-x-4 rounded-full bg-gray-300/50 p-2">
          {Object.keys(themes).map((key) => (
            <label key={key} className="cursor-pointer">
              <ThemeSwitchIcon color={getThemePaletteColor(key)} />
              <input
                type="radio"
                name="theme"
                id={key}
                value={key}
                checked={selectedTheme === key}
                onChange={() => onThemeSelect(key)}
                className="hidden"
              />
            </label>
          ))}
        </div>
      )}
      <div className="flex flex-col space-y-2">
        <button
          className="rounded-full p-2 text-foreground hover:bg-primary hover:text-foreground"
          onClick={() =>
            onModeSelect((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
        >
          {selectedMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        <button
          className="rounded-full p-2 text-foreground hover:bg-primary hover:text-foreground"
          onClick={() => setShowPalette((prev) => !prev)}
        >
          <ColorSwitcherIcon />
        </button>
      </div>
    </div>
  )
}

export const ColorSwitcherIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
)

export const DarkModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

export const LightModeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

export const ThemeSwitchIcon = ({ color }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.9773 44.9545C25.8677 44.9545 28.7298 44.3852 31.4002 43.2791C34.0706 42.173 36.497 40.5517 38.5408 38.5079C40.5846 36.4641 42.2059 34.0377 43.312 31.3673C44.4181 28.6969 44.9874 25.8348 44.9874 22.9444C44.9874 20.054 44.4181 17.1919 43.312 14.5215C42.2059 11.8511 40.5846 9.42476 38.5408 7.38093C36.497 5.33711 34.0706 3.71585 31.4002 2.60974C28.7298 1.50363 25.8677 0.934325 22.9773 0.934325L22.9773 22.9444L22.9773 44.9545Z"
      fill="rgba(3,3,3,0.5)"
    ></path>
    <path
      d="M22.9775 0.934155C20.0871 0.934155 17.225 1.50346 14.5546 2.60957C11.8842 3.71568 9.45784 5.33694 7.41402 7.38076C5.37019 9.42459 3.74894 11.851 2.64283 14.5214C1.53672 17.1917 0.967408 20.0538 0.967408 22.9443C0.967408 25.8347 1.53672 28.6968 2.64283 31.3672C3.74894 34.0375 5.37019 36.4639 7.41402 38.5077C9.45784 40.5516 11.8842 42.1728 14.5546 43.2789C17.225 44.385 20.0871 44.9543 22.9775 44.9543L22.9775 22.9443L22.9775 0.934155Z"
      fill={color}
    ></path>
  </svg>
)
