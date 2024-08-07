// src/server.ts

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { initFeatureFlags } from './openFeatureInit';
import { connectDatabase } from './database';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Initialize feature flags
initFeatureFlags();

// Connect to the database
connectDatabase();

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the TypeScript Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
