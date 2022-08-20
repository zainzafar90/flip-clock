import { useEffect, useRef } from 'react'

import { useTimer } from '@/hooks/useTimer'
import { usePrevious } from '@/hooks/usePrevious'

const Timer = () => {
  const timer = useTimer()

  return (
    <div className="perspe my-6 mx-auto text-center">
      <FlipClockPiece interval={timer.hours} />
      <FlipClockPiece interval={timer.minutes} />
      <FlipClockPiece interval={timer.seconds} />
    </div>
  )
}

const FlipClockPiece = ({ interval }) => {
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
    <span className="my-0 mx-2 inline-block">
      <span ref={flipRef}>
        <b className="card">
          <b className="card__top">{interval}</b>
          <b className="card__bottom" data-value={prevCount} />
          <b className="card__back" data-value={prevCount}>
            <b className="card__bottom" data-value={interval} />
          </b>
        </b>
      </span>
    </span>
  )
}

export default Timer
