
exports.seed = function(knex) {
  // 00-cleanup.js deleted the data from all tables, we only need to nsert seed data
      // Inserts seed entries
    return knex('roles').insert([
      {username: "admin"}, // id: 1
      {username: "TL's"}, // id: 2
      {username: "students"}, // id: 3
      
    ]);
};
