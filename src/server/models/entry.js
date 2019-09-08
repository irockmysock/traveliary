module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let getAllEntries = (callback) => {
  
      dbPoolInstance.query('SELECT * from entries', (error, queryResult) => {
        if (error) {
          // invoke callback function with results after query has executed
          callback(error, null);
        } else {
          // invoke callback function with results after query has executed
  
          callback(null, queryResult.rows );
        }
      });
    };

    let addNewEntry = (data,callback) => {

        let user = data.user_id;
        let journalId = data.journal_id;
        let title = data.title;
        let media = data.media;
        let entryContent = data.entry_content;
        let entryLocation = data.entry_location;
        let entryDate = data.entry_date;
    
        let query = "INSERT INTO entries (user_id, journal_id, title, media, entry_content, entry_location, entry_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
        const values = [user, journalId, title, media, entryContent, entryLocation, entryDate];
    
        dbPoolInstance.query(query, values, (error, queryResult) => {
          if (error) {
            // invoke callback function with results after query has executed
            callback(error, null);
          } else {
            // invoke callback function with results after query has executed
    
            callback(null, queryResult.rows );
          }
        });
    }
    
    let deleteAllJournalEntries = (data,callback) => {

        let journalId = data.journal_id;
        let query = "DELETE FROM entries WHERE journal_id=$1";
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
    



  

  
    return { 
        getAllEntries,
        addNewEntry,
        deleteAllJournalEntries
    };
  };
  