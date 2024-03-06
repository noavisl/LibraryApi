// controllers/AuthorController.ts
import { Request, Response } from "express";
import EmployeeModel from "../models/EmployeeModel";

// Read all Employeeys
export const getAll = async (req: Request, res: Response) => {
  try {
    const Employee = await EmployeeModel.find({});
    res.json(Employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Read Employee by ID
export const getById = async (req: Request, res: Response) => {
  try {
    const Employee = await EmployeeModel.findById(req.params.id);
    if (!Employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(Employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getByName = async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeModel.findByName(req.params.name);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a Employee
export const createNew = async (req: Request, res: Response) => {
  try {
    const Employee = await EmployeeModel.create(req.body);
    res.status(201).json(Employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Employee by ID
export const updateById = async (req: Request, res: Response) => {
  try {
    const Employee = await EmployeeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!Employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(Employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Employee by ID
export const deleteById = async (req: Request, res: Response) => {
  try {
    const Employee = await EmployeeModel.findByIdAndDelete(req.params.id);
    if (!Employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
