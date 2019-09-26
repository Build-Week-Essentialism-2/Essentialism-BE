
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
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('task_name')
            .notNullable();
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('auth')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
    .dropTableIfExists('values')
    .dropTableIfExists('auth'); 
};
