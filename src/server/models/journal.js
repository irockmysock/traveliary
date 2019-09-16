/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


  let getAllJournals = (callback) => {

    dbPoolInstance.query('SELECT * from journals ORDER BY created_date DESC', (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        callback(null, queryResult.rows );
      }
    });
  };

  let addNewJournal = (data, callback) => {

    let name = data.journal_name;
    let coverImg = data.cover_img;
    let user = data.user_id;
    let date = data.created_date;

    let query = "INSERT INTO journals (journal_name, cover_img, user_id, created_date) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [name, coverImg, user, date];

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

        callback(null, journalId);
      }
    });
  };


  let editJournal = (data,callback) => {

    let journalName = data.journal_name;
    let coverImg = data.cover_img;
    let userId = data.user_id;
    let journalId = data.id
    let updatedDate = data.updated_date

    let query = "UPDATE journals SET journal_name=$1, cover_img=$2, updated_date=$3 WHERE user_id=$4 AND id=$5 RETURNING *";
    const values = [journalName, coverImg, updatedDate, userId, journalId];

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

  return {
    getAllJournals,
    addNewJournal,
    deleteJournal,
    editJournal
  };
};
