import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { cartOperations } from '../state/ducks/cart'

export const mapStateToProps = state => ({
  cart: state.cart
})

export const mapDispatchToProps = {
  getCart: cartOperations.getCart,
  itemUpdate: cartOperations.itemUpdate,
  itemRemove: cartOperations.itemRemove
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
