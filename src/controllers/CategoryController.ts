// controllers/AuthorController.ts
import { Request, Response } from "express";
import CategoryModel from "../models/BorrowModel";

// Read all Categories
export const getAll= async (req: Request, res: Response) => {
  try {
    const Category = await CategoryModel.find({});
    res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Read Category by ID
export const getById = async (req: Request, res: Response) => {
  try {
    const Category = await CategoryModel.findById(req.params.id);
    if (!Category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a Category
export const createNew = async (req: Request, res: Response) => {
  try {
    const Category = await CategoryModel.create(req.body);
    res.status(201).json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Category by ID
export const updateById = async (req: Request, res: Response) => {
  try {
    const Category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!Category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(Category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Category by ID
export const deleteById = async (req: Request, res: Response) => {
  try {
    const Category = await CategoryModel.findByIdAndDelete(req.params.id);
    if (!Category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
