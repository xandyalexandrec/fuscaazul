import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

const LEFT_POSITION = 0;
const MIDDLE_POSITION = 1;
const RIGHT_POSITION = 2;

const useCarPosition = ({ initialPosition = 1 } = {}) => {
  const [position, setPosition] = useState(initialPosition)

  useHotkeys('a', () => setPosition(LEFT_POSITION))
  useHotkeys('s', () => setPosition(MIDDLE_POSITION))
  useHotkeys('d', () => setPosition(RIGHT_POSITION))
  useHotkeys('left', () => setPosition(prevPosition => prevPosition > LEFT_POSITION ? prevPosition - 1 : prevPosition))
  useHotkeys('right', () => setPosition(prevPosition => prevPosition < RIGHT_POSITION ? prevPosition + 1 : prevPosition))

  return position
}

export default useCarPosition
