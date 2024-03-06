import mongoose, { Schema, Document } from "mongoose";

export interface Category extends Document {
    id: number,
    name: string,
}

const CategorySchema: Schema = new Schema({
    id: { type: Number, required: true,min:0 },
    name: { type: String, required: true },
})

export default mongoose.model<Category>('Category', CategorySchema);