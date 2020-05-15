
exports.up = function(knex) {
    
    return knex.schema
    .createTable("recipes", recipes => {
        recipes.increments()
        recipes.string("recipe_name", 128).notNullable()
    })
  
    .createTable("steps", steps => {
        steps.increments()
  
        steps.integer("recipeID").unsigned().notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate('CASCADE') 
        .onDelete('RESTRICT')
  
        steps.string("step").notNullable()
    })
  
    .createTable("ingredients", tbl => {
        tbl.increments()
        tbl.string("quantity").notNullable()
        tbl.string("ingredient").notNullable()
    })
  
    .createTable("recipe_ingredients", tbl => {
        tbl.increments()
  
        tbl.integer("recipeID").unsigned().notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate('CASCADE') 
        .onDelete('RESTRICT')
        
        tbl.integer("ingredientID").unsigned().notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate('CASCADE') 
        .onDelete('RESTRICT')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
  };