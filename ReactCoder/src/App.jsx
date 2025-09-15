import { Routes, Route, NavLink } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import NotFound from './components/NotFound.jsx'

function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" end>Inicio</NavLink>
      <span>•</span>
      <NavLink to="/category/audio">Audio</NavLink>
      <NavLink to="/category/perifericos">Periféricos</NavLink>
      <NavLink to="/category/telefonia">Telefonía</NavLink>
    </nav>
  )
}

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenid@!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
