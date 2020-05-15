
exports.up = function(knex) {
  return knex.schema.table("steps", tbl => {
      tbl.integer("stepID").unsigned();
  })
};

exports.down = function(knex) {
  return knex.schema.table("steps", tbl => {
      tbl.dropColumn("stepID");
  })
};
