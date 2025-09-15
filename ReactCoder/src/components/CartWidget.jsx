import { Link } from 'react-router-dom'

export default function CartWidget({ count = 0 }) {
  return (
    <Link to="/cart" className="btn btn-outline-primary position-relative">
      <span role="img" aria-label="carrito">🛒</span>
      {count > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {count}
        </span>
      )}
    </Link>
  )
}