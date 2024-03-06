// routers/LibraryRouter.ts

import express from 'express';
import * as SubscriptionController from '../controllers/SubscriptionController';

const router = express.Router();

router.post('/', SubscriptionController.createNew);
router.get('/', SubscriptionController.getAll);
router.get('/:id', SubscriptionController.getById);
router.put('/:id', SubscriptionController.updateById);
router.delete('/:id', SubscriptionController.deleteById);

export default router;
