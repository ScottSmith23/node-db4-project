
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {IngredientName: 'egg'},
        {IngredientName: 'milk'},
        {IngredientName: 'flour'},
        {IngredientName: 'water'},
        {IngredientName: 'salt'},
        {IngredientName: 'dirt'}
      ]);
    });
};
