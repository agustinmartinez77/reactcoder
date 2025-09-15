import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../data/products.js'
import ItemDetail from './ItemDetail.jsx'

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id).then(setItem).finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando detalle…</p>
  if (!item) return (
    <div className="card">
      <p>Producto no encontrado.</p>
      <Link to="/" className="btn">Volver</Link>
    </div>
  )

  return <ItemDetail item={item} />
}
