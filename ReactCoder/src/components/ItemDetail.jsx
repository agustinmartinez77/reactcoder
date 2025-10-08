import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from './ItemCount.jsx'
import { useCart } from '../context/CartContext.jsx'

export default function ItemDetail({ item }) {
  const { addItem } = useCart()
  const [addedQty, setAddedQty] = useState(0)

  const handleAdd = (qty) => {
    addItem(item, qty)
    setAddedQty(qty)
  }

  return (
    <article className="card">
      <nav style={{marginBottom:12}}>
        <Link to="/">Inicio</Link> <span> / </span>
        <Link to={`/category/${item.category}`}>{item.category}</Link> <span> / </span>
        <span>{item.title}</span>
      </nav>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
        <img src={item.thumbnail} alt={item.title} style={{width:'100%', borderRadius:8, aspectRatio:'3/2', objectFit:'cover'}} />
        <div>
          <h1 style={{marginTop:0}}>{item.title}</h1>
          <p>Categoría: <span className="badge">{item.category}</span></p>
          <p style={{fontSize:32, margin:'12px 0'}}>$ {Number(item.price).toLocaleString('es-UY')}</p>

          {addedQty === 0 ? (
            <ItemCount initial={1} min={1} max={10} onAdd={handleAdd}/>
          ) : (
            <div style={{display:'flex', gap:8}}>
              <Link to="/cart" className="btn primary">Ir al carrito</Link>
              <Link to="/" className="btn">Seguir comprando</Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
