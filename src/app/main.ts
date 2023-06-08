import { addProduct } from './products/product.servic';
addProduct({
  id: '1',
  title: 'producto1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  category: {
    id: '1',
    name: 'categoria 1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});
