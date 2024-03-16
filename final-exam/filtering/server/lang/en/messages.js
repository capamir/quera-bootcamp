const messages = {
  notFound: (id) => {
    return `product with id ${id} not found!`;
  },
  removed: (id) => {
    return `product with id ${id} removed.`;
  },
};

module.exports = messages;
