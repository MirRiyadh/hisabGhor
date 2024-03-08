import Realm from 'realm';

export interface IDue {
  _id: Realm.BSON.ObjectId;
  serial: number;
  address: string;
  dueAmount: number;
  paidAmount: number;
  fullName: string;
  phone: string;
  date: Date;
}
export interface IDuePaid {
  _id: Realm.BSON.ObjectId;
  serial: number;
  paidAmount: number;
  reason: string;
  date: Date;
}
