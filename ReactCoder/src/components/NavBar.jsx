function NavBar() {
  return (
    <nav className="nav">
      <NavLink to="/" end>Inicio</NavLink>
      <span>•</span>
      <NavLink to="/category/paisajes">Paisajes</NavLink>
      <NavLink to="/category/urbano">Urbano</NavLink>
      <NavLink to="/category/tecnologia">Tecnología</NavLink>
    </nav>
  )
}
