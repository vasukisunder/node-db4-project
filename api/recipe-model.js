const db = require("../data/db");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
   


function getRecipes() {
    return db("recipes");

}

function getShoppingList(recipe_id){
    return db("ingredients as i")
    .join("recipe_ingredients as r", "r.ingredientID", "=", "i.id")
    .select("i.ingredient", "i.quantity")
    .where("r.recipeID", recipe_id);
}

function getInstructions(recipe_id){
    return db("steps as s")
    .where("s.recipeID", recipe_id);
}