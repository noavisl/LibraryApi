// routers/LibraryRouter.ts

import express from 'express';
import * as EmployeeController from '../controllers/EmployeeController';

const router = express.Router();

router.post('/', EmployeeController.createNew);
router.get('/', EmployeeController.getAll);
router.get('/:id', EmployeeController.getById);
router.put('/:id', EmployeeController.updateById);
router.delete('/:id', EmployeeController.deleteById);
router.get('/:name', EmployeeController.getByName);

export default router;
