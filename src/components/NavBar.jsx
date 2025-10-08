import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

export default function NavBar() {
  return (
    <header className="w-full border-b">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <NavLink to="/" end className={({isActive}) => isActive ? 'underline' : ''}>Inicio</NavLink>
          <span>•</span>
          <NavLink to="/category/landscape" className={({isActive}) => isActive ? 'underline' : ''}>Paisajes</NavLink>
          <NavLink to="/category/urban" className={({isActive}) => isActive ? 'underline' : ''}>Urbano</NavLink>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
}
