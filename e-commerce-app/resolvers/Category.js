exports.Category = {
  products: (parent, { filter }, { products }) => {
    const filtered = products.filter(p => p.categoryId === parent.id);
    return filter ? filtered.filter(product => product.onSale === filter.onSale) : filtered;
  },
};
