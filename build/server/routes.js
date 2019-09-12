var multer = require('multer');
var upload = multer({ dest: './uploads/' });

module.exports = (app, db) => {

  const journals = require('./controllers/journal')(db);
  app.get('/journals', journals.getAll);
  app.post('/journals/new', upload.single('coverImg'), journals.addNewJournal);
  app.delete('/journals/delete', journals.deleteJournal);  
  app.put('/journals/edit', journals.editJournal);

  const entries = require('./controllers/entry')(db);
  app.get('/entries', entries.getAll);
  app.post('/entries/new', entries.addNewEntry);
  app.delete('/journalentries/delete', entries.deleteAllJournalEntries);

  // app.get('/entries', entries.getEntriesBy);

};


// app.get('/pokemon/:id', pokemon.get);
// app.get('/api/pokemon/:id', pokemon.apiget);