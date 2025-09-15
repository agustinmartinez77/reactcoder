import ItemCard from './ItemCard.jsx'
export default function ItemList({ items }) {
  if (!items?.length) return <p>No hay productos para mostrar.</p>
  return (
    <div className="grid">
      {items.map(item => <ItemCard key={item.id} item={item} />)}
    </div>
  )
}
