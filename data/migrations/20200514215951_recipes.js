
exports.up = function(knex) {
    
    return knex.schema
    .createTableIfNotExists("recipes", recipes => {
        recipes.increments()
        recipes.string("recipe_name", 128).notNullable()
    })
  
    .createTableIfNotExists("steps", steps => {
        steps.increments()
  
        steps.integer("recipeID").unsigned().notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate('CASCADE') 
        .onDelete('CASCADE')
  
        steps.string("step").notNullable()
    })
  
    .createTableIfNotExists("ingredients", tbl => {
        tbl.increments()
        tbl.string("quantity").notNullable()
        tbl.string("ingredient").notNullable()
    })
  
    .createTableIfNotExists("recipe_ingredients", tbl => {
        tbl.increments()
  
        tbl.integer("recipeID").unsigned().notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate('CASCADE') 
        .onDelete('CASCADE')
        
        tbl.integer("ingredientID").unsigned().notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate('CASCADE') 
        .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
  };