import mongoose, { Schema, Document } from "mongoose";

export interface Borrow extends Document {
    id: number,
    book: object,
    copiesAvailable:Number,
    subscription: object,
    borrow_date: Date,
    return_date: Date,
}

const BorrowSchema: Schema = new Schema({
    id: { type: Number, require: true, min: 0 },
    book: {type: Schema.Types.ObjectId,ref:'Book',required: true},
    subscription: {type: Schema.Types.ObjectId,ref:'Subscription',required: true},
    borrow_date: {type:Date,required: true},
    return_date: {type:Date,required: true},
    copiesAvailable: { type: Number, require: true,},
})

export default mongoose.model<Borrow>('Borrow',BorrowSchema);