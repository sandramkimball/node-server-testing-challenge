
exports.seed = function(knex) {
  return knex('vikings').truncate()
    .then(function () {
      return knex('vikings').insert([
        {name: 'Ivar the Boneless'},
        {name: 'Leif Erikson'},
        {name: 'Erik the Red'},
        {name: 'Ragnar Lodbrook'},
        {name: 'Freydis Eiriksdottir'},
        {name: 'Gunnar Hamundarson'},
        {name: 'Eric Bloodaxe'},
        {name: 'Egil Skallagrimsson'},
        {name: 'Harald Hardrada'},
        {name: 'Bjorn Ironside'},
      ]);
    });
};
