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
  setPaused,
  startTurbo,
  moveLeftPosition,
  moveMiddlePosition,
  moveRightPosition,
  moveLeft,
  moveRight,
}) => {
  const keyboardActions = useMemo(() => ({
    [A]: () => moveLeftPosition(),
    [S]: () => moveMiddlePosition(),
    [D]: () => moveRightPosition(),
    [LEFT]: () => moveLeft(),
    [RIGHT]: () => moveRight(),
    [T]: () => startTurbo(),
    [ESC]: () => setPaused(true),
    [SPACE]: () => setPaused(false),
  }), [
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
