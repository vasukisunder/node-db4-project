
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipeID: 1, ingredientID: '3'},
        {recipeID: 1, ingredientID: '2'},
        {recipeID: 2, ingredientID: '1'},
        {recipeID: 2, ingredientID: '5'},
        {recipeID: 2, ingredientID: '5'},
        {recipeID: 3, ingredientID: '2'},
        {recipeID: 3, ingredientID: '4'}
      
      ]);
    });
};
