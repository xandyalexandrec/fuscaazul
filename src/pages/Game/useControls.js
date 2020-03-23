import useGestures from 'use-gestures'

const A = 65
const S = 83
const D = 68
const LEFT = 37
const RIGHT = 39
const T = 84
const ESC = 27
const SPACE = 32

const useControls = ({ positionActions, setPaused, startTurbo, scene }) => {
  const keyboardActions = {
    [A]: () => positionActions.moveLeftPosition(),
    [S]: () => positionActions.moveMiddlePosition(),
    [D]: () => positionActions.moveRightPosition(),
    [LEFT]: () => positionActions.moveLeft(),
    [RIGHT]: () => positionActions.moveRight(),
    [T]: () => startTurbo(),
    [ESC]: () => setPaused(true),
    [SPACE]: () => setPaused(false),
  }

  document.addEventListener('keydown', ({ keyCode }) => {
    const action = keyboardActions[keyCode];
    if (typeof action === 'function') {
      action()
    }
  })

  useGestures(scene, {
    onSwipeLeft: () => positionActions.moveLeft(),
    onSwipeRight: () => positionActions.moveRight(),
    onSwipeUp: () => startTurbo(),
  })
}

export default useControls
