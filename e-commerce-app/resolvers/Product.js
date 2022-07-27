exports.Product = {
  category: (parent, args, { categories }) => {
    return categories.find(c => c.id === parent.categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter(r => r.productId === id);
  },
};
