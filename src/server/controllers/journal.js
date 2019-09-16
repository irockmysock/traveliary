module.exports = (db) => {

  let getAll = (request, response) => {

    db.journal.getAllJournals((error, journals) => {
      if (error) {
        console.error('error getting journals', error);
        response.status(500);
        response.send('server error');
      } else {
        response.send({journals: journals});
        // console.log(journals)
      }
    });
  };

  let addNewJournal = (request, response) => {
    // console.log(request.body); 
    db.journal.addNewJournal(request.body, (error, result) => {
      // console.log('~~~~~NEW JOURNAL~~~~~~~~~~~');
      // console.log(result)
      response.send(result[0]);
    });
  };


  let deleteJournal = (request, response) => {
    // console.log(request.body); 
    db.journal.deleteJournal(request.body,(error, result) => {
      // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      // console.log(result)
      response.send(result);
    });
  };
  

  let editJournal = (request, response) => {
    // console.log(request.body); 
    db.journal.editJournal(request.body,(error, result) => {
      // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
      // console.log(result)
      response.send(result);
    });
  };

  return {
    getAll,
    addNewJournal,
    deleteJournal,
    editJournal
  }

};

