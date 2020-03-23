import { useMemo, useEffect } from 'react'
import useGestures from 'use-gestures'

const A = 65
const S = 83
const D = 68
const LEFT = 37
const RIGHT = 39
const T = 84
const ESC = 27
const SPACE = 32

const useControls = ({
  scene,
  paused,
  setPaused,
  startTurbo,
  moveLeftPosition,
  moveMiddlePosition,
  moveRightPosition,
  moveLeft,
  moveRight,
}) => {
  const keyboardActions = useMemo(() => ({
    [A]: () => !paused && moveLeftPosition(),
    [S]: () => !paused && moveMiddlePosition(),
    [D]: () => !paused && moveRightPosition(),
    [LEFT]: () => !paused && moveLeft(),
    [RIGHT]: () => !paused && moveRight(),
    [T]: () => !paused && startTurbo(),
    [ESC]: () => setPaused(true),
    [SPACE]: () => setPaused(false),
  }), [
    paused,
    setPaused,
    startTurbo,
    moveLeftPosition,
    moveMiddlePosition,
    moveRightPosition,
    moveLeft,
    moveRight,
  ])

  useEffect(() => {
    const handlerKeydown = ({ keyCode }) => {
      const action = keyboardActions[keyCode]
      if (typeof action === 'function') {
        action()
      }
    }

    document.addEventListener('keydown', handlerKeydown)

    return () => document.removeEventListener('keydown', handlerKeydown)
  }, [keyboardActions])

  useGestures(scene, {
    onSwipeLeft: () => moveLeft(),
    onSwipeRight: () => moveRight(),
    onSwipeUp: () => startTurbo(),
  })
}

export default useControls
