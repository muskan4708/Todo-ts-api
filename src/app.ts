import express from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

export default app;
