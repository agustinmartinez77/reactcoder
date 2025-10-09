import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import ItemCount from './ItemCount.jsx'
import { useCart } from '../context/CartContext.jsx'

const MAX_PER_PRODUCT = 10

export default function ItemDetail({ item }) {
  const { addItem, items } = useCart()        
  const [addedQty, setAddedQty] = useState(0)

  const currentInCart = useMemo(() => {
    if (!Array.isArray(items)) return 0
    return items.reduce((acc, it) => acc + (it.id === item.id ? Number(it.qty || 0) : 0), 0)
  }, [items, item.id])

  const remaining = Math.max(0, MAX_PER_PRODUCT - currentInCart)

  const handleAdd = (qty) => {
    const toAdd = Math.min(Number(qty || 0), remaining) 
    if (toAdd <= 0) return
    addItem(item, toAdd)
    setAddedQty(toAdd)
  }

  return (
    <article className="card">
      <nav style={{marginBottom:12}}>
        <Link to="/">Inicio</Link> <span> / </span>
        <Link to={`/category/${item.category}`}>{item.category}</Link> <span> / </span>
        <span>{item.title}</span>
      </nav>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{width:'100%', borderRadius:8, aspectRatio:'3/2', objectFit:'cover'}}
        />
        <div>
          <h1 style={{marginTop:0}}>{item.title}</h1>
          <p>Categoría: <span className="badge">{item.category}</span></p>
          <p style={{fontSize:32, margin:'12px 0'}}>$ {Number(item.price).toLocaleString('es-UY')}</p>

          <p style={{opacity:.7, marginTop:0, marginBottom:8}}>
            Disponibles: {remaining} / {MAX_PER_PRODUCT}
          </p>

          {remaining === 0 ? (
            <>
              <p style={{ color: 'orange', margin: '8px 0 12px' }}>Sin stock</p>
              <div style={{display:'flex', gap:8}}>
                <Link to="/cart" className="btn primary">Ir al carrito</Link>
                <Link to="/" className="btn">Seguir comprando</Link>
              </div>
            </>
          ) : addedQty === 0 ? (
            <ItemCount
              initial={1}
              min={1}
              max={remaining}    
              onAdd={handleAdd}
            />
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
