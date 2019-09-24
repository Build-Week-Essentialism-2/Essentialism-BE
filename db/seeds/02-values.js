
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        { value: "athleticism", priority: null },
        { value: "relationships", priority: true },
        { value: "art", priority: false },
      ]);
    });
};
