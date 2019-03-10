export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    return serializedState === null ? null : JSON.parse(serializedState)
  } catch (e) {
    return null
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    // ignore
  }
}