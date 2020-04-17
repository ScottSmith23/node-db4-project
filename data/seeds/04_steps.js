
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
            recipe_id: 1,
            step_number: 1,
            instruction: "eat egg",
        },
        { recipe_id: 1, step_number: 2, instruction: "eat salt" },
        {
          recipe_id: 1,
            step_number: 3,
            instruction: "eat crap",
        },
        {
          recipe_id: 2,
            step_number: 1,
            instruction: "buy cake",
        },
        { recipe_id: 2, step_number: 4, instruction: "crab cake" },
        {
          recipe_id: 2,
            step_number: 2,
            instruction: "find crab",
        },
        { recipe_id: 2, step_number: 3, instruction: "????" },
        { recipe_id: 3, step_number: 1, instruction: "order takeout" },
    ]);
    });
};
