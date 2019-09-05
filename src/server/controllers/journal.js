module.exports = (db) => {

  // let apiget = (request, response) => {
  //   const stuff = {
  //     banana: 'oranges',
  //     kiwi: 'apple'
  //   };

  //   response.send(stuff);
  // };

  // let get = (request, response) => {

  //     // use pokemon model method `get` to retrieve pokemon data
  //     console.log( db )

  //     db.pokemon.get(request.params.id, (error, pokemon) => {
  //       // queryResult contains pokemon data returned from the pokemon model
  //       if (error) {

  //         console.error('error getting pokemon', error);
  //         response.status(500);
  //         response.send('server error');

  //       } else {

  //         if( pokemon === null ){

  //           // render pokemon view in the pokemon folder
  //           response.status(404);
  //           response.send('not found');

  //         }else{

  //           // render pokemon view in the pokemon folder
  //           response.render('pokemon/show', { pokemon: pokemon });

  //         }
  //       }
  //     });
  // };

  let getAll = (request, response) => {

    db.journal.getAllJournals((error, journals) => {
      // queryResult contains pokemon data returned from the pokemon model
      if (error) {
        console.error('error getting journals', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({journals: journals});
        console.log(journals)
      }
    });
  };

  let addNewJournal = (request, response) => {
    console.log(request.body); 
    db.journal.addNewJournal(request.body,(error, result) => {
      // TODO add conditionals that check for errors
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      console.log(result)
      response.send(result[0]);
    });


  };

  return {
    getAll,
    addNewJournal

    // get : get,
    // apiget : apiget
  }

};
