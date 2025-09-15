import { Link } from 'react-router-dom'
import ItemCount from './ItemCount.jsx'
export default function ItemDetail({ item }) {
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
          <p style={{fontSize:32, margin:'12px 0'}}>$ {item.price.toLocaleString('es-UY')}</p>
          <ItemCount initial={1} min={1} max={10} onAdd={(qty)=>alert(`Agregaste ${qty} unidad(es)`)}/>
        </div>
      </div>
    </article>
  )
}
