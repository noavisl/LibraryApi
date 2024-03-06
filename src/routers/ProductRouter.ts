// routers/LibraryRouter.ts

import express from 'express';
import * as ProductController from '../controllers/ProductController';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProductById);
router.delete('/:id', ProductController.deleteProductById);

export default router;
