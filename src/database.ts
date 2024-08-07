// src/database.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // Use environment variable for database URL
    },
  },
});

export const connectDatabase = async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
};

export default prisma;
