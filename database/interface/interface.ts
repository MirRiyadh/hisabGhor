import Realm from 'realm';

// ------------ due start----------------

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

// ------------ due end----------------
// ------------ Loan start----------------

export interface ILoan {
  _id: Realm.BSON.ObjectId;
  serial: number;
  address: string;
  loanAmount: number;
  paidAmount: number;
  fullName: string;
  phone: string;
  date: Date;
}
export interface ILoanPaid {
  _id: Realm.BSON.ObjectId;
  serial: number;
  paidAmount: number;
  reason: string;
  date: Date;
}
// ------------ Loan End----------------
// ------------ Savings start----------------

export interface ISavings {
  _id: Realm.BSON.ObjectId;
  serial: number;
  savingsAmount: number;
  paidAmount: number;
  title: string;
  phone: string;
  date: Date;
}
export interface ISavingsPaid {
  _id: Realm.BSON.ObjectId;
  serial: number;
  paidAmount: number;
  reason: string;
  date: Date;
}
// ------------ Savings End----------------
