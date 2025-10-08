import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function CartWidget() {
  const { totalItems } = useCart()
  return (
    <Link to="/cart" className="btn btn-outline-primary position-relative">
      <span role="img" aria-label="carrito">🛒</span>
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
