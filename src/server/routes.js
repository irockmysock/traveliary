module.exports = (app, db) => {

  const journals = require('./controllers/journal')(db);
  app.get('/journals', journals.getAll);
  app.post('/journals/new', journals.addNewJournal);
  app.delete('/journals/delete', journals.deleteJournal);

  const entries = require('./controllers/entry')(db);
  app.get('/entries', entries.getAll);
  app.post('/entries/new', entries.addNewEntry);
  // app.get('/entries', entries.getEntriesBy);

};


// app.get('/pokemon/:id', pokemon.get);
// app.get('/api/pokemon/:id', pokemon.apiget);