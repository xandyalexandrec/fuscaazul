import { useState, useEffect } from 'react'
import useTurbo from '../useTurbo'

const LAP_DISTANCE = 500000
const INITIAL_LAP = 0
const MAX_LAPS = 5;
const INITIAL_SPEED = 60
const INCREASE_SPEED_TURBO = 7
const INCREASE_MIN_SPEED = -2
const INCREASE_MAX_SPEED = 4

const calculateSpeed = ({ speed, turbo }) => {
  // If turbo is active increase speed by 7
  if(turbo) {
    return speed + INCREASE_SPEED_TURBO
  }
  // Without turbo it increase speed between -2 and 4
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
  const [turbo] = useTurbo({ paused })

  useEffect(() => {
    if (!paused) {
      setTimeout(() => setSpeed(calculateSpeed({ speed, turbo })), 1000)
      setTimeout(() => setLap(lap + 1), LAP_DISTANCE / speed)
      setTimeout(() => setDuration(duration + 1), 1000)
    }
  }, [duration, paused])

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
    turbo,
    paused,
    setPaused,
    duration,
    maxLaps: MAX_LAPS,
  }
}

export default useLaps
