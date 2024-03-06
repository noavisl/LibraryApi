// controllers/AuthorController.ts
import { Request, Response } from "express";
import SubscriptionModel from "../models/SubscriptionModel";

// Read all Subscription
export const getAll = async (req: Request, res: Response) => {
  try {
    const Subscription = await SubscriptionModel.find({});
    res.json(Subscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Read Employee by ID
export const getById = async (req: Request, res: Response) => {
  try {
    const Subscription = await SubscriptionModel.findById(req.params.id);
    if (!Subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json(Subscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getByName = async (req: Request, res: Response) => {
  try {
    const Subscription = await SubscriptionModel.findByName(req.params.name);
    if (!Subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.json(Subscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a Subscription
export const createNew = async (req: Request, res: Response) => {
  try {
    const Subscription = await SubscriptionModel.create(req.body);
    res.status(201).json(Subscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Subscription by ID
export const updateById = async (req: Request, res: Response) => {
  try {
    const Subscription = await SubscriptionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!Subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json(Subscription);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Subscription by ID
export const deleteById = async (req: Request, res: Response) => {
  try {
    const Subscription = await SubscriptionModel.findByIdAndDelete(req.params.id);
    if (!Subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json({ message: "Subscription deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const PaymentDebt = async (req: Request, res: Response) => {
  try {
    const { paymentAmount } = req.body; // Assuming the payment amount is sent in the request body
    const subscriptionId = req.params.subscriptionId; // Assuming subscription ID is passed as a parameter

    // Updating subscription debt
    const subscription = await SubscriptionModel.findById(subscriptionId);
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    subscription.debt -= paymentAmount; // Subtracting the payment amount from the subscription's debt
    await subscription.save();

    // Sending response with remaining debt
    const remainingDebt = subscription.debt;
    res.json({ success: true, remainingDebt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
