import { useState, useEffect } from 'react'

const useCountdown = ({ initialValue = 3, handleFinish = () => {} } = {}) => {
  const [counter, setCounter] = useState(initialValue)

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000)
    } else {
      handleFinish()
    }
  }, [counter, handleFinish])

  return [
    counter
  ]
}

export default useCountdown
