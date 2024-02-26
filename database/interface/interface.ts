import Realm from 'realm';

export interface IDue {
  _id: Realm.BSON.ObjectId;
  serial: number;
  address: string;
  dueAmount: number;
  paidAmount: number;
  fullName: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
