

exports.seed = function(knex) {
   // 00-cleanup.js deleted the data from all tables, we only need to nsert seed data
    // Inserts seed entries
  return knex('users').insert([
    {username: 'milani', password: "pass", role_id: 3},
    {username: 'des', password: "pass", role_id: 3},
    {username: 'amya', password: "pass", role_id: 3},
  ]);
};

