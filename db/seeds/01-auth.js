
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { username: "elijah", email: "elijah@gmail.com", password: "elijah" },
        { username: "tim", email: "tim@gmail.com", password: "tim" },
        { username: "ben", email: "ben@gmail.com", password: "ben"},
      ]);
    }
)};
