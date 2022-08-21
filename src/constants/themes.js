import { colorShade } from '@/utils/common'

export const themes = [
  // Default
  {
    dark: {
      background: '#000',
      foreground: '#FFF',
      flip: '#202020',
      'flip-bottom': colorShade('#202020', -5),
    },
    light: {
      background: '#FFF',
      foreground: '#000',
      flip: '#EFEFEF',
      'flip-bottom': colorShade('#EFEFEF', 5),
    },
  },
  // Green
  {
    dark: {
      background: '#0F140F',
      foreground: '#C4EBC1',
      flip: '#171C17',
      'flip-bottom': colorShade('#171C17', -5),
    },
    light: {
      background: '#E8FFE8',
      foreground: '#546654',
      flip: colorShade('#C1f0C1', -5),
      'flip-bottom': colorShade('#C1f0C1', -5),
    },
  },
  // Purple
  {
    dark: {
      background: '#131315',
      foreground: '#C5C8F8',
      flip: '#1B1C20',
      'flip-bottom': colorShade('#1B1C20', -5),
    },
    light: {
      background: '#EFF2FF',
      foreground: '#222843',
      flip: colorShade('#E4E7FE', -5),
      'flip-bottom': colorShade('#E4E7FE', -5),
    },
  },
  // Red
  {
    dark: {
      background: '#1B1616',
      foreground: '#EF6666',
      flip: '#271E1E',
      'flip-bottom': colorShade('#271E1E', -5),
    },
    light: {
      background: '#FFF4F4',
      foreground: '#FF8F8F',
      flip: colorShade('#FFEDED', -5),
      'flip-bottom': colorShade('#FFEDED', -5),
    },
  },
  // Orange
  {
    dark: {
      background: '#16120B',
      foreground: '#FFAC45',
      flip: '#221E17',
      'flip-bottom': colorShade('#221E17', -5),
    },
    light: {
      background: '#FFF7EC',
      foreground: '#FDC97B',
      flip: colorShade('#FFEED6', -5),
      'flip-bottom': colorShade('#FFEED6', -5),
    },
  },

  // Yellow
  {
    dark: {
      background: '#0D0F11',
      foreground: '#FFD458',
      flip: '#14161A',
      'flip-bottom': colorShade('#14161A', -5),
    },
    light: {
      background: '#FFFDF4',
      foreground: '#FFDB57',
      flip: colorShade('#FFF8E1', -5),
      'flip-bottom': colorShade('#FFF8E1', -5),
    },
  },
]
