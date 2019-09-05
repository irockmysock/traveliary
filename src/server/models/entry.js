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


    // let getEntriesByJournal = (journal_id,callback) => {
    
    //     let query = "SELECT * FROM entries WHERE journal_id=$1";
    //     const values = [journal_id];
    
    //     dbPoolInstance.query(query, values, (error, queryResult) => {
    //       if (error) {
    //         // invoke callback function with results after query has executed
    //         callback(error, null);
    //       } else {
    //         // invoke callback function with results after query has executed
    
    //         callback(null, queryResult.rows );
    //       }
    //     });
    // };
  

  
    return {
      getAllEntries,
    //   getEntriesByJournal
    };
  };
  