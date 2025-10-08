import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { createOrder } from '../services/firebase.js'
import { Link } from 'react-router-dom'

export default function CheckoutForm() {
  const { items, totalAmount, clear } = useCart()
  const [form, setForm] = useState({ name:'', email:'', phone:'' })
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true); setError(null)
    try {
      const id = await createOrder({
        buyer: form,
        items: items.map(({id, title, price, qty}) => ({id, title, price, qty})),
        total: totalAmount
      })
      setOrderId(id)
      clear()
    } catch (e) {
      setError('No se pudo generar la orden.')
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <section className="card">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu id de orden es: <strong>{orderId}</strong></p>
        <Link to="/" className="btn">Volver al inicio</Link>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="card">
        <h2>Checkout</h2>
        <p>Tu carrito está vacío.</p>
        <Link to="/" className="btn">Ir al catálogo</Link>
      </section>
    )
  }

  return (
    <section className="card">
      <h2>Checkout</h2>
      <p>Total a pagar: <strong>$ {totalAmount.toLocaleString('es-UY')}</strong></p>

      <form onSubmit={handleSubmit} style={{display:'grid', gap:8, maxWidth:420}}>
        <input required placeholder="Nombre" value={form.name}  onChange={e=>setForm(f=>({...f, name:e.target.value}))}/>
        <input required type="email" placeholder="Email" value={form.email} onChange={e=>setForm(f=>({...f, email:e.target.value}))}/>
        <input required placeholder="Teléfono" value={form.phone} onChange={e=>setForm(f=>({...f, phone:e.target.value}))}/>

        {error && <p style={{color:'crimson'}}>{error}</p>}

        <button className="btn primary" disabled={loading}>{loading ? 'Generando orden…' : 'Confirmar compra'}</button>
      </form>
    </section>
  )
}
