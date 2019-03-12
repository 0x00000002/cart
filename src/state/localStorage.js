export const emptyState = {
  cart: {
    data: {
      items: [],
      qnty: 0,
      sum: 0
    }
  },
  products: {
    data: {
      items: []
    }
  }
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState')
    return serializedState ? JSON.parse(serializedState) : emptyState
  } catch (e) {
    return emptyState
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('cartState', serializedState)
  } catch (e) {
    // ignore
  }
}

export const clearState = state => localStorage.clear()
