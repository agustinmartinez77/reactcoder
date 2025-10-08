import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.jsx';
import { fetchProducts } from '../services/firebase.js';

export default function ItemListContainer({ greeting = 'Catálogo' }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true); setError(null);
    fetchProducts(categoryId)
      .then(data => { if (mounted) setItems(data); })
      .catch(e => { if (mounted) setError(String(e?.message || e)); })
      .finally(() => { if (mounted) setLoading(false); });
    return () => { mounted = false; };
  }, [categoryId]);

  return (
    <section className="card">
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}>
        <h1 style={{margin:0, fontSize:20}}>{greeting}</h1>
        {categoryId && <span className="badge">Filtro: {categoryId}</span>}
      </div>
      {loading && <p>Cargando productos…</p>}
      {error && <p style={{color:'crimson'}}>Error: {error}</p>}
      {!loading && !error && (items?.length ? (
        <ItemList items={items} />
      ) : (
        <p>No hay productos para mostrar.</p>
      ))}
    </section>
  );
}
