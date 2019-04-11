
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('ingedients').insert([
        { name: 'ingredient 1' }, // 1
        { name: 'ingredient 2' }, // 2
        { name: 'ingredient 3' }, // 3
        { name: 'ingredient 4' }, // 4
      ]);
};

    // recipes = tracks (one to many) belongs only to one dish.
    // ingredients = students (many to many)
    // dish = cohort (one to many)