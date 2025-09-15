import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="card" style={{textAlign:'center'}}>
      <h1 style={{marginTop:0}}>404 - Página no encontrada</h1>
      <p>El recurso no existe o el enlace está mal formado.</p>
      <Link to="/" className="btn primary">Volver al inicio</Link>
    </section>
  )
}
