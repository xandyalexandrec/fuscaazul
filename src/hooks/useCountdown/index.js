import { useState, useEffect } from 'react'

const ONE_SECOND_IN_MS = 1000;

const useCountdown = ({ initialValue = 3, onFinish }) => {
  const [counter, setCounter] = useState(initialValue)

  useEffect(() => {
    counter > 0
      ? setTimeout(() => setCounter(time => time - 1), ONE_SECOND_IN_MS)
      : onFinish()
  }, [counter, onFinish])

  return counter
}

export default useCountdown
