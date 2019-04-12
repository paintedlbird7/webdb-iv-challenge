
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex('dishes').del()
    // .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
    { name: 'salt-1', recipe_id: 1 }, // 1
    { name: 'salt-2', recipe_id: 1 }, // 2
    { name: 'salt-3', recipe_id: 1 }, // 3
    { name: 'pepper-1', recipe_id: 2 }, // 4
    { name: 'pepper-2', recipe_id: 2 }, // 5
    { name: 'pepper-3', recipe_id: 2 }, // 6
    { name: 'flour-1', recipe_id: 3 }, // 7
    { name: 'flour-2', recipe_id: 3 }, // 8
    { name: 'flour-3', recipe_id: 3 }, // 9
      ]);
    };
        // recipes = tracks
    // ingredients = students
    // dish = cohort