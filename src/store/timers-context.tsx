import { createContext } from 'react'

type Timer = {
  name: string
  duration: number
}

type TimersState = {
  isRunning: boolean
  timers: Timer[]
}

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}

// used for managing context (ie. application-wide data)
const TimersContext = createContext<TimersContextValue | null>(null)
