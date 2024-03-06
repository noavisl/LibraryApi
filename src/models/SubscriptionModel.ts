import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISubscription extends Document {
    id: number,
    tz: number,
    name: string,
    email: string,
    phone: string,
    address: string,//can create Address class
    list_borrow:object[],
    list_history:object[],
    debt:number,
}

export interface ISubscriptionModel extends Model<ISubscription> {
    findByName(name: string): Promise<ISubscription[]>;
  }

const SubscriptionSchema: Schema = new Schema({
    id: { type: Number, required: true, min: 0 },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    list_borrow:{type: Schema.Types.ObjectId,ref:'Borrow',required:true},
    list_history:{type: Schema.Types.ObjectId,ref:'Borrow',required:true},
    debt: { type: Number, required: true, min: 0,validate: { validator: (value: number) => { return value >= 0; }, message: 'debt must be a non-negative number.' }  },

})

export default mongoose.model<ISubscription,ISubscriptionModel>('Subscription', SubscriptionSchema);