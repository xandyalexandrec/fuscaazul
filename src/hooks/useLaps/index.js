import { useState, useEffect } from 'react'
import useTurbo from '../useTurbo'

const LAP_DISTANCE = 500000
const INITIAL_LAP = 0
const INITIAL_SPEED = 60
const SPEED_INCREASE = 0.5;
const SPEED_INCRESE_WITH_TURBO = 10

const useLaps = () => {
  const [lap, setLap] = useState(INITIAL_LAP)
  const [speed, setSpeed] = useState(INITIAL_SPEED)
  const [paused, setPaused] = useState(false)
  const [duration, setDuration] = useState(0)
  const [turbo] = useTurbo({ paused })

  useEffect(() => {
    if (!paused) {
      const increase = turbo ? SPEED_INCRESE_WITH_TURBO : SPEED_INCREASE
      setTimeout(() => setSpeed(speed + increase), 1000)
      setTimeout(() => setLap(lap + 1), LAP_DISTANCE / speed)
      setTimeout(() => setDuration(duration + 1), 1000)
    }
  }, [duration, paused])

  return {
    lap,
    speed,
    turbo,
    paused,
    setPaused,
    duration,
  }
}

export default useLaps
