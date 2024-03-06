import mongoose, { Schema, Document,Model } from "mongoose";

export interface IEmployee extends Document {
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string,//can create Address class
    salary: number,
    bonus: number,
    level: string
}

export interface IEmployeeModel extends Model<IEmployee> {
    findByName(name: string): Promise<IEmployee[]>;
  }

const EmployeeSchema: Schema = new Schema({
    id: { type: Number, required: true, min: 0 },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    salary: { type: Number, required: true, min: 0, validate: { validator: (value: number) => { return value >= 0; }, message: 'salary must be a non-negative number.' } },
    bonus: { type: Number, required: true, min: 0, validate: { validator: (value: number) => { return value >= 0; }, message: 'bonus must be a non-negative number.' } },
    level: { type: String, required: true },
})

export default mongoose.model<IEmployee,IEmployeeModel>('Employee', EmployeeSchema);
