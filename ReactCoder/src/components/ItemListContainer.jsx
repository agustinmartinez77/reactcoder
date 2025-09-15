import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/products.js'
import ItemList from './ItemList.jsx'

export default function ItemListContainer({ greeting = 'Catálogo' }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProducts(categoryId).then(setItems).finally(() => setLoading(false))
  }, [categoryId])

  return (
    <section className="card">
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}>
        <h1 style={{margin:0, fontSize:20}}>{greeting}</h1>
        {categoryId && <span className="badge">Filtro: {categoryId}</span>}
      </div>
      {loading ? <p>Cargando productos…</p> : <ItemList items={items} />}
    </section>
  )
}
