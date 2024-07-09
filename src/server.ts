import express from 'express';
import mongoose from 'mongoose';
import todoRoutes from './routes/todoRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Database connection
const MONGO_URI = "mongodb+srv://muskan4708:muskan123@cluster0.6pgkumg.mongodb.net/mydatabase?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI
  )
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err: string) => console.error("MongoDB connection error:", err));

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });