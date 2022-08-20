import { useState, useEffect } from 'react'

// Hook inspired from https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks
export const useTimer = () => {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return time
}

const getTime = () => {
  const t = new Date()
  const hours = ('00' + (t.getHours() % 12)).slice(-2)
  const minutes = ('00' + t.getMinutes()).slice(-2)
  const seconds = ('00' + t.getSeconds()).slice(-2)

  return {
    hours,
    minutes,
    seconds,
  }
}
