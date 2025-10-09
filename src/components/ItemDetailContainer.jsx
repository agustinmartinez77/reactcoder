import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/firebase.js';
import ItemDetail from './ItemDetail.jsx';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    if (!id) { setError('ID inválido'); setLoading(false); return; }
    setLoading(true); setError(null);
    fetchProductById(id)
      .then(data => { if (alive) setItem(data); })
      .catch(e => { if (alive) setError(String(e?.message || e)); })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, [id]);

  if (loading) return <section className="card"><p>Cargando…</p></section>;
  if (error || !item) return <section className="card"><p>Producto no encontrado.</p></section>;

  return <ItemDetail item={item} />;
}
