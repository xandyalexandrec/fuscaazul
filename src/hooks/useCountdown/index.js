import { useState, useEffect } from 'react'

const useCountdown = ({ initialValue = 3, handleFinish = () => {} } = {}) => {
  const [counter, setCounter] = useState(initialValue)

  useEffect(() => {
    if (counter > 1) {
      setTimeout(() => setCounter(counter - 1), 1000)
    } else {
      handleFinish()
    }
  }, [counter])

  return [
    counter
  ]
}

export default useCountdown
