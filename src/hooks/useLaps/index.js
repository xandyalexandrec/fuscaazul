import { useState, useEffect } from 'react'
import useTurbo from '../useTurbo'

const LAP_DISTANCE = 1000
const INITIAL_LAP = 0
const MAX_LAPS = 5;
const INITIAL_SPEED = 60
const INCREASE_SPEED_TURBO = 7
const INCREASE_MIN_SPEED = -2
const INCREASE_MAX_SPEED = 3

const calculateSpeed = ({ speed, turbo }) => {
  // If turbo is active increase speed by 7
  if (turbo) {
    return speed + INCREASE_SPEED_TURBO
  }
  // Without turbo it increase velocity between min and max speed increase
  return speed + getRandomNumber(INCREASE_MIN_SPEED, INCREASE_MAX_SPEED)
}

const getRandomNumber = (min, max) => {
  return Math.floor((Math.random() * (max - min) + min))
}

const useLaps = ({ handleFinish }) => {
  const [lap, setLap] = useState(INITIAL_LAP)
  const [speed, setSpeed] = useState(INITIAL_SPEED)
  const [paused, setPaused] = useState(false)
  const [duration, setDuration] = useState(0)
  const [distance, setDistance] = useState(0)
  const turbo = useTurbo({ paused })

  useEffect(() => {
    if (!paused) {
      const timeout = setTimeout(() => setDuration(duration + 1), 1000)
      return () => clearTimeout(timeout)
    }
  }, [duration, paused])

  useEffect(() => {
    setSpeed(calculateSpeed({ speed, turbo }))
    setDistance(distance + speed)
    if (distance >= LAP_DISTANCE) {
      setLap(lap + 1)
      setDistance(distance - LAP_DISTANCE)
    }
  }, [duration])

  useEffect(() => {
    if (lap === MAX_LAPS) {
      setPaused(true)
      handleFinish({
        duration,
        speed
      })
    }
  }, [lap])

  return {
    lap,
    speed,
    distance,
    turbo,
    paused,
    setPaused,
    duration,
    maxLaps: MAX_LAPS,
  }
}

export default useLaps
