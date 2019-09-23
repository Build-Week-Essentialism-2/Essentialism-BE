
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_name: 'gym', task_description: 'Go to the gym and do Strongman 5x5 workout', created_on: '9-23-2019'},
        { task_name: 'work', task_description: 'get database migrations finished today', created_on: '9-26-2019'},
        { task_name: 'date', task_description: 'take Sarah to In and Out', created_on: '9-28-2019'}
      ]);
    });
};
