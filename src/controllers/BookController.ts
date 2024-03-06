// controllers/AuthorController.ts
import { Request, Response } from 'express';
import BookModel from '../models/BookModel';


// Read all Books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find({});
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read book by ID
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getByAuthor = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByName(req.params.name);
    if (!book) {
      return res.status(404).json({ message: 'Authors not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read books by Name
export const getByName = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByName(req.params.name);
    if (!book) {
      return res.status(404).json({ message: 'book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getByCategory = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByName(req.params.name);
    if (!book) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getByLanguage = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByName(req.params.name);
    if (!book) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a Author
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Book by ID
export const updateBookById = async (req: Request, res: Response) => {
  try {
    const Book = await BookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!Book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(Book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete Book by ID
export const deleteBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
