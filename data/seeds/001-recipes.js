
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'enchiladas'},
        {id: 2, name: 'tamales'},
        {id: 3, name: 'tacos'}
      ]);
    });
};
