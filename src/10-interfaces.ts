type Size = 'S' | 'M' | 'L' | 'XL'
type userId = string | number
// type Product = {
//   id: string | number,
//   title: string,
//   createdAt: Date,
//   stock: number,
//   size?: Size
// }

interface Product {
  id: string | number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
}

const products: Product[] = []

products.push({
  id: '1',
  title: 'producto1',
  createdAt: new Date(),
  stock: 90,
})

const addProduct = (data: Product) =>{
  products.push(data)
}
