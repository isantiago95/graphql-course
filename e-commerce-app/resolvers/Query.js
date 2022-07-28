exports.Query = {
  hello: () => {
    return ['hello', 'world'];
  },
  products: (_parent, { filter }, { products }) => {
    return filter ? products.filter(product => product.onSale === filter.onSale) : products;
  },
  product: (parent, { id }, { products }) => {
    return products.find(p => p.id === id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, { id }, { categories }) => {
    return categories.find(c => c.id === id);
  },
};
