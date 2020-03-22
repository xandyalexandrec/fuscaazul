import { useState, useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

const TURBO_DURATION = 5000
const TURBO_RECHARGING_DURATION = 10000

const useTurbo = ({ paused }) => {
  const [turbo, setTurbo] = useState(false)
  const [rechargingTurbo, setRechargingTurbo] = useState(false)

  useHotkeys('t', () => handleTurbo(), [turbo, rechargingTurbo, paused])

  const handleTurbo = () => {
    if (!turbo && !rechargingTurbo && !paused) {
      setTurbo(true)
      setRechargingTurbo(true)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => setTurbo(false), TURBO_DURATION)
    return () => clearTimeout(timeout)
  }, [turbo])

  useEffect(() => {
    const timeout = setTimeout(() => setRechargingTurbo(false), TURBO_RECHARGING_DURATION)
    return () => clearTimeout(timeout)
  }, [rechargingTurbo])

  return turbo
}

export default useTurbo
