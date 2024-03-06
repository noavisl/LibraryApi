// routers/LibraryRouter.ts

import express from 'express';
import * as CategoryController from '../controllers/CategoryController';

const router = express.Router();

router.post('/', CategoryController.createNew);
router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.put('/:id', CategoryController.updateById);
router.delete('/:id', CategoryController.deleteById);

export default router;
