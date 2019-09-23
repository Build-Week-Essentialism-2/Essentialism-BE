
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        { value: "athleticism", priority: null, user_id: 1 },
        { value: "relationships", priority: true, user_id: 1 },
        { value: "art", priority: false, user_id: 1 },
      ]);
    });
};
