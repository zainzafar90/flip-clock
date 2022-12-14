import { useEffect, useRef } from 'react'

import { usePrevious } from '@/hooks/usePrevious'

export const FlipClockPiece = ({ interval, ampm }) => {
  const flipRef = useRef()
  const prevCount = usePrevious(interval)

  useEffect(() => {
    // removes class from clock piece
    flipRef.current.classList.remove('flip')

    // accessing a readonly property (making insignificantly smaller call) - adds delay when flip is finished and retriggered
    void flipRef.current.offsetWidth

    // adds class from clock piece
    flipRef.current.classList.add('flip')
  }, [interval])

  return (
    <span className="my-0 mx-2 inline-block p-2">
      <span ref={flipRef}>
        <b className="card relative text-[18vw] text-foreground sm:text-[18vw]">
          <b className="card__top">{interval}</b>
          <b className="card__bottom" data-value={prevCount} />
          <b className="card__back" data-value={prevCount}>
            <b className="card__bottom" data-value={interval} />
          </b>
          <span className="absolute bottom-1 left-2 text-xs text-foreground opacity-75 sm:bottom-4 sm:left-8 sm:text-xl md:text-2xl">
            {ampm}
          </span>
        </b>
      </span>
    </span>
  )
}
