// routers/LibraryRouter.ts

import express from 'express';
import * as BorrowController from '../controllers/BorrowController';

const router = express.Router();

router.post('/', BorrowController.createNew);
router.get('/', BorrowController.getAll);
router.get('/:id', BorrowController.getById);
router.put('/:id', BorrowController.updateById);
router.delete('/:id', BorrowController.deleteById);
router.post('/borrowBook', BorrowController.borrowBook);
router.put('/returnBook', BorrowController.returnBook);

export default router;
