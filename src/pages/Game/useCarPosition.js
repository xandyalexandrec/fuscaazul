import { useState, useCallback } from 'react'

const LEFT_POSITION = 0;
const MIDDLE_POSITION = 1;
const RIGHT_POSITION = 2;

const useCarPosition = ({ initialPosition = 1 } = {}) => {
  const [position, setPosition] = useState(initialPosition)

  const actions = {
    moveLeftPosition: () => setPosition(LEFT_POSITION),
    moveMiddlePosition: () => setPosition(MIDDLE_POSITION),
    moveRightPosition: () => setPosition(RIGHT_POSITION),
    moveLeft: useCallback(() => setPosition(position > LEFT_POSITION ? position - 1 : position), [position]),
    moveRight: useCallback(() => setPosition(position < RIGHT_POSITION ? position + 1 : position), [position]),
  }

  return { position, actions }
}

export default useCarPosition
