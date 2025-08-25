export default function ItemListContainer({ greeting }) {
  return (
    <section className="p-4 rounded-3 bg-light border">
      <h1 className="h4 mb-2">Home</h1>
      <p>{greeting}</p>
    </section>
  )
}
