import { faker } from '@faker-js/faker';

var database = { products: [] };

for (let index = 0; index <= 20; index++) {
    database.products.push({
        id: index,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrl: 'https://picsum.photos/400?random=' + index,
        quantity: faker.random.numeric(2)
    });
}

console.log(JSON.stringify(database));
