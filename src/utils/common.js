// export const isBrowser = () => {
//   return !!(
//     typeof window !== 'undefined' &&
//     window.document &&
//     window.document.createElement
//   )
// }

// export const isDarkModePreferred = () => {
//   return (
//     isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches
//   )
// }

export const colorShade = (col, amt) => {
  col = col.replace(/^#/, '')
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

  let [r, g, b] = col.match(/.{2}/g)
  ;[r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ]

  r = Math.max(Math.min(255, r), 0).toString(16)
  g = Math.max(Math.min(255, g), 0).toString(16)
  b = Math.max(Math.min(255, b), 0).toString(16)

  const rr = (r.length < 2 ? '0' : '') + r
  const gg = (g.length < 2 ? '0' : '') + g
  const bb = (b.length < 2 ? '0' : '') + b

  return `#${rr}${gg}${bb}`
}

export const getThemePaletteColor = (theme) => {
  switch (theme) {
    case 'default':
      return '#fff'
    case 'green':
      return '#D6F5D6'
    case 'purple':
      return '#CED4FF'
    case 'red':
      return '#FFA7A7'
    case 'orange':
      return '#FFC57C'
    case 'yellow':
      return '#FFDB57'
  }
}
