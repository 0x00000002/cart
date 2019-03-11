const props = {
  correct: {
    cart: {
      data: {
        items: [],
        qnty: 11,
        sum: 100
      }
    },
    products: {
      data: {
        items: []
      }
    },
    handlers: {
      cartTotal: jest.fn(),
      clearCart: jest.fn(),
      fetchCart: jest.fn(),
      addItem: jest.fn(),
      removeItem: jest.fn(),
      showCart: jest.fn(),
      fetchList: jest.fn()
    }

  },
  wrong: {
    cart: {
    }
  }
}

export default props
