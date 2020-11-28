import express from 'express';

export default function createApp(): express.Application {
  const app = express();
  app.use(express.json()); 
  return app;
}
