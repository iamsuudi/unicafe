const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

export default function counterReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return { good: state.good + 1, ok: state.ok, bad: state.bad }
    case 'OK':
      return { good: state.good, ok: state.ok + 1, bad: state.bad }
    case 'BAD':
      return { good: state.good, ok: state.ok, bad: state.bad + 1 }
    case 'ZERO':
      return { good: 0, ok: 0, bad: 0 }
    default: return state
  }
}

export function incrementGood() {
  return ({
    type: 'GOOD'
  })
}
export function incrementBad() {
  return ({
    type: 'BAD'
  })
}
export function incrementOk() {
  return ({
    type: 'OK'
  })
}
export function reset() {
  return ({
    type: 'ZERO'
  })
}
