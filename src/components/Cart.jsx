import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, totalAmount, removeItem, clear } = useCart()

  if (items.length === 0) {
    return (
      <section className="card">
        <h2>Carrito vacío</h2>
        <p>Agregá productos desde el catálogo.</p>
        <Link to="/" className="btn">Ir al inicio</Link>
      </section>
    )
  }

  return (
    <section className="card">
      <h2 style={{marginTop:0}}>Tu Carrito</h2>
      <ul style={{listStyle:'none', padding:0, margin:0}}>
        {items.map(it => (
          <li key={it.id} className="card" style={{marginBottom:8}}>
            <div style={{display:'flex', gap:12, alignItems:'center'}}>
              <img src={it.thumbnail} alt={it.title} style={{width:80, height:54, objectFit:'cover', borderRadius:6}} />
              <div style={{flex:1}}>
                <strong>{it.title}</strong>
                <div className="opacity-70">x{it.qty} · $ {Number(it.price).toLocaleString('es-UY')}</div>
              </div>
              <button className="btn" onClick={()=>removeItem(it.id)}>Quitar</button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:12}}>
        <strong>Total: $ {totalAmount.toLocaleString('es-UY')}</strong>
        <div style={{display:'flex', gap:8}}>
          <button className="btn" onClick={clear}>Vaciar</button>
          <Link to="/checkout" className="btn primary">Continuar al pago</Link>
        </div>
      </div>
    </section>
  )
}
