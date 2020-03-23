import { useHotkeys } from 'react-hotkeys-hook'
import useGestures from 'use-gestures'

const useControls = ({ positionActions, setPaused, startTurbo, scene }) => {
  useHotkeys('t', () => startTurbo())
  useHotkeys('esc', () => setPaused(true))
  useHotkeys('space', () => setPaused(false))

  useHotkeys('a', () => positionActions.moveLeftPosition())
  useHotkeys('s', () => positionActions.moveMiddlePosition())
  useHotkeys('d', () => positionActions.moveRightPosition())
  useHotkeys('left', () => positionActions.moveLeft())
  useHotkeys('right', () =>positionActions.moveRight())

  useGestures(scene, {
    onSwipeLeft: () => positionActions.moveLeft(),
    onSwipeRight: () => positionActions.moveRight(),
    onSwipeUp: () => startTurbo(),
  })
}

export default useControls
