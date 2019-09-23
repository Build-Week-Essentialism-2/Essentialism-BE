
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_name: 'gym', task_description: 'Go to the gym and do Strongman 5x5 workout', user_id: 1},
        { task_name: 'work', task_description: 'get database migrations finished today', user_id: 1 },
        { task_name: 'date', task_description: 'take Sarah to In and Out', user_id: 1 }
      ]);
    });
};
