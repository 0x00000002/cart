const fake = {
  props: {
    correct: {
      cart: {
        data: {
          items: [
            { id: 0, name: 'Coca Cola', price: '3.00', qnty: 1, total: '3.00' },
            { id: 1, name: 'Pepsi Cola', price: '2.50', qnty: 2, total: '5.00' }
          ],
          qnty: 3,
          sum: '8.00'
        }
      },
      products: {
        data: {
          items: [
            { id: 0, name: 'Coca Cola', price: 3.00 },
            { id: 1, name: 'Pepsi Cola', price: 2.50 }
          ]
        }
      }
    },
    wrong: {
      cart: {},
      products: {}
    },
    handlers: {
      cartTotal: jest.fn(),
      clearCart: jest.fn(),
      fetchCart: jest.fn(),
      addItem: jest.fn(),
      removeItem: jest.fn(),
      showCart: jest.fn(),
      fetchList: jest.fn()
    },
  },
  item: {
    id: 0,
    name: 'Coca Cola',
    qnty: 1,
    price: '3.00'
  },
  state: 'fake-state',
  payload: 'fake-payload'
}

export default fake
