import { useState } from 'react'

import { themes } from '@/constants/themes'

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
        <div className="flex items-center space-x-4 rounded-full bg-slate-50 p-2">
          {Object.keys(themes).map((key) => (
            <label key={key} className="text-white">
              <input
                type="radio"
                name="theme"
                id={key}
                value={key}
                checked={selectedTheme === key}
                onChange={() => onThemeSelect(key)}
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
