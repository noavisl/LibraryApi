import mongoose, { Schema, Document, Model } from "mongoose";

enum Language {
    English,
    Hebrew,
    French,
    Spanish,
    Russian
}
export interface IBook extends Document {
    id: number,
    name: string,
    category: Object,
    location: [number, number],
    language: Language,
    numCopy: number,
    numAvailable: number,
    ListSubscription: Object[],
}

export interface IBookModel extends Model<IBook> {
    findByName(name: string): Promise<IBook[]>;
  }

const BookSchema: Schema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId,ref:'Category', required: true },
    location: { type: [Number, Number], required: true },
    language: { type: Language, required: true },
    numCopy: { type: Number, required: true, min: 0, validate: { validator: (value: number) => { return value >= 0; }, message: 'num copy book must be a non-negative number.' } },
    numAvailable: { type: Number, required: true, min: 0, validate: { validator: (value: number) => { return value >= 0; }, message: 'num available book must be a non-negative number.' } },
    ListSubscription: { type: Schema.Types.ObjectId,ref:'Subscription', required: true },
})

const BookModel = mongoose.model<IBook, IBookModel>('Book', BookSchema);

export default BookModel;