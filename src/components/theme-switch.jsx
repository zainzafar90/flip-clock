import { useState } from 'react'

import { themes } from '@/constants/themes'

export const ThemeSwitch = ({ selectedTheme, onThemeSelect }) => {
  const [showPalette, setShowPalette] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 flex items-center justify-center space-x-2">
      {showPalette && (
        <div className="flex items-center space-x-4 rounded-full bg-slate-50 p-2">
          {Object.keys(themes).map((key) => (
            <label key={key} className=" text-white">
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
      <button
        className="rounded-full p-2 text-white/10 hover:bg-slate-800 hover:text-white"
        onClick={() => setShowPalette((prev) => !prev)}
      >
        <ColorSwitcherIcon />
      </button>
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
