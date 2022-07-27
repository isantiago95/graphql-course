exports.Query = {
  hello: () => {
    return ['hello', 'world'];
  },
  products: (parent, args, { products }) => {
    return products;
  },
  product: (parent, { id }, { products }) => {
    return products.find(p => p.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find(c => c.id === id);
  },
};
