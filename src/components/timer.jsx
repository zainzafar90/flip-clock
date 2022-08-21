import { useTimer } from '@/hooks/useTimer'

import { FlipClockPiece } from './flip-clock-piece'

const Timer = () => {
  const timer = useTimer()
  const { hours, minutes, ampm } = timer

  return (
    <div className="flex h-screen items-center justify-center text-center">
      <FlipClockPiece interval={hours} ampm={ampm} />
      <FlipClockPiece interval={minutes} />
      {/* <FlipClockPiece interval={seconds} /> */}
    </div>
  )
}

export default Timer
