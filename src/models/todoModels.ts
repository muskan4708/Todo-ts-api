import mongoose, { Schema, Document } from 'mongoose';

export interface Todo extends Document {
  title: string;
  description: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false }
});

export default mongoose.model<Todo>('Todo_test', TodoSchema);
