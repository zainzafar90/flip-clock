import { useState, useEffect } from 'react'

import { useTimer } from '@/hooks/useTimer'

const Timer = () => {
  const timer = useTimer()

  return (
    <div className="flip-clock">
      <FlipClockPiece interval={timer.hours} />
      <FlipClockPiece interval={timer.minutes} />
      <FlipClockPiece interval={timer.seconds} />
    </div>
  )
}

const FlipClockPiece = ({ interval }) => {
  const [flipClass, setFlipClass] = useState('')

  useEffect(() => {
    if (flipClass.includes('flip')) {
      setFlipClass('')
      setTimeout(() => {
        setFlipClass('flip')
      }, 1)
    } else {
      setFlipClass('flip')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval])

  return (
    <span className={`flip-clock__piece ${flipClass}`}>
      <b className="flip-clock__card card">
        <b className="card__top">{interval}</b>
        <b className="card__bottom" data-value={interval} />
        <b className="card__back" data-value={interval}>
          <b className="card__bottom" data-value={interval} />
        </b>
      </b>
    </span>
  )
}

export default Timer
