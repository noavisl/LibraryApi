// index.ts
import express from 'express';
import connectDB from './models/db';
import productRouter from './routers/ProductRouter';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
