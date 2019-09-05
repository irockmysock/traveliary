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
  
    return {
      getAll

    }
  
  };
  