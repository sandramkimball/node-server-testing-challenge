const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  return db('vikings').insert(hobbit, 'id').then(([id])=> {
    return db('vikings').where({id}).first();
  });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('vikings');
}

function findById(id) {
  return null;
}
