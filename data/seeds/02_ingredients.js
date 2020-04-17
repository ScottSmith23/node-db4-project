
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {RecipeName: 'egg'},
        {RecipeName: 'milk'},
        {RecipeName: 'flour'},
        {RecipeName: 'water'},
        {RecipeName: 'salt'},
        {RecipeName: 'dirt'}
      ]);
    });
};
