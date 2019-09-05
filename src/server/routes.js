module.exports = (app, db) => {

  const journals = require('./controllers/journal')(db);
  app.get('/journals', journals.getAll);
  app.post('/journals/new', journals.addNewJournal);

  const entries = require('./controllers/entry')(db);
  app.get('/entries', entries.getAll);

};


// app.get('/pokemon/:id', pokemon.get);
// app.get('/api/pokemon/:id', pokemon.apiget);