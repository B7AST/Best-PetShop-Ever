module.exports = {
  tableName: 'product_category',
  attributes: {
    updatedAt: false,
    createdAt: false,
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    pet_related: { type: 'number', required: true},

    product: {
      collection: 'product',
      via:        'product_category'
    }
  },
};
