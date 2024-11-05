import express from 'express';
import path from 'path';
import cors from 'cors';

export /*bundle*/ function routes(app: express.Application) {
  app.use(cors());

  // Serve static files from the relative path
  app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'main.html'));
  });
}