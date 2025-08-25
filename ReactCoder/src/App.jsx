import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container py-4">
        <ItemListContainer greeting="¡Bienvenid@ a mi tienda! Muy pronto vas a ver el catálogo acá." />
      </main>
    </>
  )
}