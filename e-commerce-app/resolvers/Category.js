exports.Category = {
  products: (parent, args, { products }) => {
    return products.filter(p => p.categoryId === parent.id);
  },
};
