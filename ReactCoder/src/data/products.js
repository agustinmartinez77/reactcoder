const PRODUCTS = [
  { id: '1', title: 'Mountain Sunrise', price: 1200, category: 'landscape', thumbnail: 'https://picsum.photos/seed/mountain/600/360' },
  { id: '2', title: 'City Skyline',     price: 1500, category: 'urban',     thumbnail: 'https://picsum.photos/seed/city/600/360' },
  { id: '3', title: 'Golden Gate',      price: 1800, category: 'urban',     thumbnail: 'https://picsum.photos/seed/bridge/600/360' },
  { id: '4', title: 'Blue Lake',        price: 1300, category: 'landscape', thumbnail: 'https://picsum.photos/seed/lake/600/360' },
  { id: '5', title: 'Forest Path',      price: 1100, category: 'landscape', thumbnail: 'https://picsum.photos/seed/forest/600/360' },
]

const delay = (ms = 400) => new Promise(r => setTimeout(r, ms))

export async function getProducts(categoryId) {
  await delay()
  return categoryId ? PRODUCTS.filter(p => p.category === categoryId) : PRODUCTS
}

export async function getProductById(id) {
  await delay()
  return PRODUCTS.find(p => p.id === id) ?? null
}
