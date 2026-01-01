// Database configuration and Prisma client setup
const { PrismaClient } = require('@prisma/client');

// Create a single instance of PrismaClient
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Enable logging for debugging
});

// Test database connection
async function connectDB() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1); // Exit if database connection fails
  }
}

// Disconnect database on app shutdown
async function disconnectDB() {
  await prisma.$disconnect();
  console.log('🔌 Database disconnected');
}

// Handle shutdown signals
process.on('SIGINT', async () => {
  await disconnectDB();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await disconnectDB();
  process.exit(0);
});

// Initialize connection
connectDB();

module.exports = prisma;