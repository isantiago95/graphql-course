exports.Product = {
  category: (parent, args, { categories }) => {
    return categories.find(c => c.id === parent.categoryId);
  },
};
