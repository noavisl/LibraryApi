// controllers/AuthorController.ts
import { Request, Response } from 'express';
import AuthorModel from '../models/AuthorModel';


// Read all Authors
export const getAllAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await AuthorModel.find({});
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read authors by ID
export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const product = await AuthorModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Authors not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read authors by Name
export const getAuthorByName = async (req: Request, res: Response) => {
  try {
    const product = await AuthorModel.findByName(req.params.name);
    if (!product) {
      return res.status(404).json({ message: 'Authors not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export const getAllAuthorBooks = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const author = await AuthorModel.findById(authorId).populate('books');
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    const books = author.ListBooks;
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a Author
export const createAuthor = async (req: Request, res: Response) => {
  try {
    const product = await AuthorModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update Author by ID
export const updateAuthorById = async (req: Request, res: Response) => {
  try {
    const product = await AuthorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete Author by ID
export const deleteAuthorById = async (req: Request, res: Response) => {
  try {
    const Author = await AuthorModel.findByIdAndDelete(req.params.id);
    if (!Author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.json({ message: 'Author deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
