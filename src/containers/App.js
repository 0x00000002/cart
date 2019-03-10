import { connect } from 'react-redux'
import App from '../components/App'
import { cartOperations } from '../state/ducks/cart'
import { productsOperations } from '../state/ducks/products'

export const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
})

export const mapDispatchToProps = {
  fetchList: productsOperations.fetchProducts,
  fetchCart: cartOperations.fetchCart,
  cartTotal: cartOperations.cartTotal,
  removeItem: cartOperations.removeItem,
  addItem: cartOperations.addItem,
  clearCart: cartOperations.clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
