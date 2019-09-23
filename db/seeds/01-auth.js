
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('auth').del()
    .then(function () {
      // Inserts seed entries
      return knex('auth').insert([
        { username: "elijah", email: "elijah@gmail.com", password: "elijah" },
        { username: "tim", email: "tim@gmail.com", password: "tim" },
        { username: "ben", email: "ben@gmail.com", password: "ben"},
      ]);
    }
)};
