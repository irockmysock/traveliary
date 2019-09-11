module.exports = (db) => {

  
    let getAll = (request, response) => {
  
      db.entry.getAllEntries((error, entries) => {
        // queryResult contains pokemon data returned from the pokemon model
        if (error) {
          console.error('error getting journals', error);
          response.status(500);
          response.send('server error');
        } else {
          response.send({entries: entries});
          console.log(entries)
        }
      });
    };

    let addNewEntry = (request, response) => {
        console.log(request.body);

        db.entry.addNewEntry(request.body,(error, result) => {
          // TODO add conditionals that check for errors
          console.log('~~~~~~~~ADDING~~~~~~~~~');
          console.log(result)
          response.send(result[0]);
        });
    };

    let deleteAllJournalEntries = (request, response) => {
        console.log(request.body);

        db.entry.deleteAllJournalEntries(request.body,(error, result) => {
          // TODO add conditionals that check for errors
          console.log('~~~~~~~~DELETING ALL JOURNAL ENTRIES~~~~~~~~~~');
          console.log(result)
          response.send(result);
        });
    };

    

    
  
    return {
    getAll,
    addNewEntry,
    deleteAllJournalEntries,
    }

  };
  