import CartWidget from './CartWidget.jsx'

export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src="/logo.svg" alt="Logo" width="32" height="32" />
            <span className="fw-semibold">MiTienda</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Ofertas</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            </ul>
            <CartWidget count={2} />
          </div>
        </div>
      </nav>
    </header>
  )
}
