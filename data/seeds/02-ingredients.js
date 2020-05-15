
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'milk', quantity: '1 cup'},
        {id: 2, ingredient: 'cheese', quantity: '1 cup'},
        {id: 3, ingredient: 'bread', quantity: '2 slices'},
        {id: 4, ingredient: 'penne', quantity: '8 oz'},
        {id: 5, ingredient: 'cheerios', quantity: '1/2 cup'}
      ]);
    });
};
