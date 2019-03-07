import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { cartOperations } from '../state/ducks/cart'

export const mapStateToProps = ({ cart }) => ({ cart })

export const mapDispatchToProps = {
  fetchCart: cartOperations.fetchCart,
  itemUpdate: cartOperations.itemUpdate,
  itemRemove: cartOperations.itemRemove
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
