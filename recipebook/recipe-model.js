const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findIngredients,
    getShoppingList,
    getInstructions,
    getIngredientUse,
    add,
    addStep,
    update,
    remove,
}

//implementation details
function find() {
    return db("recipes");
}

function findIngredients() {
    return db("ingredients");
}

function findById(id) {
    return db("recipes").where({id}).first();
}

function getShoppingList(id) {
    return db("recipe_ingredients as ri")
    .join('recipes as r', "r.id","ri.recipe_id")
    .join('ingredients as i', "i.id","ri.ingredient_id")
    .select('ri.id',"ri.recipe_id","i.ingredientname","ri.quantity")
    .where("ri.recipe_id",id);
}

function getInstructions(id) {
    return db("steps as s")
    .join('recipes as r', "r.id","s.recipe_id")
    .select('s.id',"s.recipe_id","s.step_number","s.instruction")
    .orderBy("s.step_number","asc")
    .where("s.recipe_id",id);
}

function getIngredientUse(id) {
    return db("recipes as r")
    .join('recipe_ingredients as ri', "r.id","ri.recipe_id")
    .select('ri.id',"r.recipename")
    .where("ri.ingredient_id",id);
}

function add(scheme) {
    return db("schemes")
        .insert(scheme,"id")
        .then(([id]) => {
            return findById(id);
        })
}

function addStep(stepData, id) {

    return db('steps')
    .insert(stepData)
    .then(ids => ({ id: ids[0] }));
  }

function update(changes,id) {
    return db("schemes").where({id})
        .update(changes)
        .then(([id]) => {
            return findById(id);
        })
}


function remove(id) {
    return db('schemes')
      .where('id', id)
      .delete();
  }