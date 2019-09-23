
exports.up = function(knex) {
    return knex.schema.createTable('auth', tbl => {
        tbl.increments() 
        tbl.string('username')
            .notNullable()
            .unique() 
        tbl.string('email')
            .notNullable()
            .unique()
        tbl.string('password')
            .notNullable()
    })
    .createTable('values', tbl => {
        tbl.increments()
        tbl.string('value')
            .unique()
        tbl.boolean('priority')
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('auth')
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task_name')
            .notNullable(); 
        tbl.string('task_description')
        tbl.string('created_on')
        tbl.string('due_on')
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('auth')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
    .dropTableIfExists('values')
    .dropTableIfExists('auth'); 
};
