
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipeID: 1, stepID: 1, step: "Get bread" },
        { recipeID: 1, stepID: 2, step: "Put together sandwich" },
        { recipeID: 2, stepID: 1, step: "Pour milk" },
        { recipeID: 2, stepID: 2, step: "Pour cereal" },
        { recipeID: 3, stepID: 1, step: "Make pasta" },
      
      ]);
    });
};
