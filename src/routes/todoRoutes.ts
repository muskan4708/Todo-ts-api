import { Router } from 'express';
import {  createTodo,getTodo,getTodoById ,deleteTodo ,updateTodo} from '../controllers/todoController';

const router = Router();

router.get('/', getTodo);
router.post('/', createTodo);
router.get('/:id', getTodoById);
 router.put('/:id', updateTodo);
 router.delete('/:id', deleteTodo);

export default router;
