import { useTimer } from '@/hooks/useTimer'

import { FlipClockPiece } from './flip-clock-piece'

const Timer = () => {
  const timer = useTimer()

  return (
    <div className="m-auto flex h-screen items-center text-center">
      <FlipClockPiece interval={timer.hours} ampm={timer.ampm} />
      <FlipClockPiece interval={timer.minutes} />
      <FlipClockPiece interval={timer.seconds} />
    </div>
  )
}

export default Timer
