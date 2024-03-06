// controllers/AuthorController.ts
import { Request, Response } from "express";
import BorrowModel from "../models/BorrowModel";
import BookModel from "../models/BookModel";
import SubscriptionModel from "../models/SubscriptionModel";

// Read all Borrows
export const getAll = async (req: Request, res: Response) => {
  try {
    const Borrow = await BorrowModel.find({});
    res.json(Borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Read Borrow by ID
export const getById = async (req: Request, res: Response) => {
  try {
    const Borrow = await BorrowModel.findById(req.params.id);
    if (!Borrow) {
      return res.status(404).json({ message: "book not found" });
    }
    res.json(Borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a Borrow
export const createNew = async (req: Request, res: Response) => {
  try {
    const Borrow = await BorrowModel.create(req.body);
    res.status(201).json(Borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Borrow by ID
export const updateById = async (req: Request, res: Response) => {
  try {
    const Borrow = await BorrowModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!Borrow) {
      return res.status(404).json({ message: "Borrow not found" });
    }
    res.json(Borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Borrow by ID
export const deleteById = async (req: Request, res: Response) => {
  try {
    const Borrow = await BorrowModel.findByIdAndDelete(req.params.id);
    if (!Borrow) {
      return res.status(404).json({ message: "Borrow not found" });
    }
    res.json({ message: "Borrow deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Borrow a book for a subscription
export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { subscriptionId, bookId } = req.params;

    // Check if book is available
    const bookData = await BookModel.findById(bookId);
    if (!bookData || bookData.numCopy === 0) {
      return res.status(400).json({ message: 'Book is not available for borrowing' });
    }

    // Decrease number of available copies
    bookData.numCopy -= 1;
    await bookData.save();

    // Create borrow record
    const borrow = await BorrowModel.create({
      book: bookId,
      subscription: subscriptionId,
      borrow_date: new Date(),
      return_date: null // Return date is initially null
    });

    res.status(201).json(borrow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Return a borrowed book
export const returnBook = async (req: Request, res: Response) => {
  try {
    const { subscriptionId } = req.params;

    // Find borrow record for the subscription
    const borrow = await BorrowModel.findOne({ subscription: subscriptionId, return_date: null });
    if (!borrow) {
      return res.status(404).json({ message: 'No borrowed books found for this subscription' });
    }

    // Update return date
    borrow.return_date = new Date();
    await borrow.save();

    // Increase number of available copies
    const bookData = await BookModel.findById(borrow.book);
    if (!bookData) {
      return res.status(500).json({ message: 'Book data not found' });
    }
    bookData.numCopy += 1;
    await bookData.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
