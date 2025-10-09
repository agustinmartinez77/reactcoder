import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function CartWidget() {
  const { totalItems } = useCart(); 

  return (
    <Link to="/cart" className="btn" style={{ position:'relative' }}>
      🛒
      <span
        style={{
          position:'absolute', top:-6, right:-6,
          fontSize:12, padding:'2px 6px', borderRadius:12,
          background:'#1e63ff', color:'#fff'
        }}
      >
        {totalItems || 0}
      </span>
    </Link>
  );
}
