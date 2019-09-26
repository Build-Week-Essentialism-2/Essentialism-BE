
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_name: 'gym', user_id: 1},
        { task_name: 'work', user_id: 1 },
        { task_name: 'date', user_id: 1 }
      ]);
    });
};
