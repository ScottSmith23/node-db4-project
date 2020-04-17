const db = require("../data/db-config.js");

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove,
}

//implementation details
function find() {
    return db("recipes");
}

function findById(id) {
    return db("schemes").where({id}).first();
}

function findSteps(id) {
    return db("steps as st")
    .join('schemes as sc', "sc.id","st.scheme_id")
    .select('st.id',"st.scheme_id","st.step_number",'st.instructions')
    .orderBy("st.step_number","asc")
    .where("st.scheme_id",id);
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