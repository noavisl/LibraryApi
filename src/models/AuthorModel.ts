// models/AuthorModel.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

// Interface for Author document
export interface IAuthor extends Document {
  id: number;
  name: string;
  ListBooks: object[];
  ListCategory: object[];
}

// Interface for Author model with static methods
export interface IAuthorModel extends Model<IAuthor> {
  findByName(name: string): Promise<IAuthor[]>;
}

const AuthorSchema: Schema = new Schema({
  id: { type: Number, require: true, min: 0 },
  name: { type: String, required: [true, 'Name is required'] },
  ListBooks: { type: Schema.Types.ObjectId, ref: 'Book', required: [true, 'List of Books is required'] },
  ListCategory: { type: Schema.Types.ObjectId, ref: 'Category', required: [true, 'List of Categories is required'] },
});

// Define the static method findByName
AuthorSchema.statics.findByName = function (name: string): Promise<IAuthor[]> {
  return this.find({ name }).exec(); // Assuming 'name' is the field you want to search by
};

const AuthorModel = mongoose.model<IAuthor, IAuthorModel>('Author', AuthorSchema);

export default AuthorModel;
