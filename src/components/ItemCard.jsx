import { Link } from 'react-router-dom';

export default function ItemCard({ item }) {
  return (
    <article className="card">
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{
          width: '100%',
          borderRadius: 8,
          aspectRatio: '3 / 2',
          objectFit: 'cover',
          marginBottom: 8,
        }}
      />
      <h3 style={{ margin: '4px 0 8px' }}>{item.title}</h3>
      <p style={{ margin: '0 0 8px' }}>
        Categoría: <span className="badge">{item.category}</span>
      </p>
      <p style={{ margin: '0 0 12px', fontWeight: 600 }}>
        $ {item.price.toLocaleString('es-UY')}
      </p>
      <Link to={`/item/${item.id}`} className="btn primary">Ver detalle</Link>
    </article>
  );
}
