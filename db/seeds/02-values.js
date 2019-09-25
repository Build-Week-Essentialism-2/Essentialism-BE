
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        { value: "Athleticism", priority: false, user_id: 0 },
        { value: "Art", priority: false, user_id: 0 },
        { value: "Literature", priority: false, user_id: 0 },
        { value: "Creativity", priority: false, user_id: 0 },
        { value: "Making a difference", priority: false, user_id: 0 },
        { value: "Independence", priority: false, user_id: 0 },
        { value: "Kindness", priority: false, user_id: 0 },
        { value: "Generosity", priority: false, user_id: 0 },
        { value: 'Carpe diem, "Seize the day"', priority: false, user_id: 0 },
        { value: "Community", priority: false, user_id: 0 },
        { value: "Music", priority: false, user_id: 0 },
        { value: "Morals", priority: false, user_id: 0 },
        { value: "Environmentalism", priority: false, user_id: 0 },
        { value: "Relationships", priority: false, user_id: 0 },
        { value: "Humor", priority: false, user_id: 0 },
        { value: "Successful Career", priority: false, user_id: 0 },
      ]);
    });
};
