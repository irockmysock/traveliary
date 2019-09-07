/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


  let getAllJournals = (callback) => {

    dbPoolInstance.query('SELECT * from journals', (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };

  let addNewJournal = (data,callback) => {

    let name = data.journal_name;
    let coverImg = data.cover_img;
    let user = data.user_id;

    let query = "INSERT INTO journals (journal_name, cover_img, user_id) VALUES ($1, $2, $3) RETURNING *";
    const values = [name, coverImg, user];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };


  let deleteJournal = (data,callback) => {

    let journalId = data.journal_id;
    let query = "DELETE FROM journals WHERE id=$1";
    const values = [journalId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };


  let editJournal = (data,callback) => {

    let journalName = data.journal_name;
    let coverImg = data.cover_img;
    let userId = data.user_id;
    let query = "UPDATE journals SET journal_name=$1, cover_img=$2 WHERE user_id=$3 RETURNING *";
    const values = [journalName, coverImg, userId];

    dbPoolInstance.query(query, values, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };

  // let create = (pokemon, callback) => {
  //   // set up query
  //   const queryString = `INSERT INTO pokemons (name, num, img, weight, height)
  //     VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  //   const values = [
  //     pokemon.name,
  //     pokemon.num,
  //     pokemon.img,
  //     pokemon.weight,
  //     pokemon.height
  //   ];

  //   // execute query
  //   dbPoolInstance.query(queryString, values, (error, queryResult) => {
  //     // invoke callback function with results after query has executed

  //     if( error ){

  //       console.log("query error", error)

  //       // invoke callback function with results after query has executed
  //       callback(error, null);

  //     }else{

  //       // invoke callback function with results after query has executed

  //       if( queryResult.rows.length > 0 ){
  //         callback(null, queryResult.rows[0]);

  //       }else{
  //         callback(null, null);

  //       }
  //     }
  //   });
  // };

  // let get = (id, callback) => {
  //   const values = [id];

  //   dbPoolInstance.query('SELECT * from pokemons WHERE id=$1', values, (error, queryResult) => {
  //     if( error ){

  //       // invoke callback function with results after query has executed
  //       callback(error, null);

  //     }else{

  //       // invoke callback function with results after query has executed

  //       if( queryResult.rows.length > 0 ){
  //         callback(null, queryResult.rows[0]);

  //       }else{
  //         callback(null, null);

  //       }
  //     }
  //   });
  // };


  return {
    getAllJournals,
    addNewJournal,
    deleteJournal,
    editJournal
    // create,
    // get 
  };
};
