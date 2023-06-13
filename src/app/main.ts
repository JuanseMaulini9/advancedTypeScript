import { faker } from '@faker-js/faker';
import { addProduct, products, updateProduct, findProducts } from './products/product.servic';

for (let i = 0; i < 50; i++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price()),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  });
}

console.log(products)
const product = products[0]
updateProduct(product.id, {
  title: 'newTitle',
  stock: 80,
})


findProducts({
  stock: 10,
  color: 'red',
  isNew:true,
  tags: ['fsdf', 'fdskjfk']
})
