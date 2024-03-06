// routers/LibraryRouter.ts

import express from 'express';
import * as AuthorController from '../controllers/AuthorController';

const router = express.Router();

router.post('/', AuthorController.createAuthor);
router.get('/', AuthorController.getAllAuthors);
router.get('/:id', AuthorController.getAuthorById);
router.put('/:id', AuthorController.updateAuthorById);
router.delete('/:id', AuthorController.deleteAuthorById);
router.get('/:name', AuthorController.getAuthorByName);
router.get('/:id/books', AuthorController.getAllAuthorBooks); 

export default router;
