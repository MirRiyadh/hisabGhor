import Realm, {ObjectSchema} from 'realm';

//----------------- Due Database Start--------------------

export class Due extends Realm.Object<Due> {
  _id!: Realm.BSON.ObjectId | string;

  static schema: ObjectSchema = {
    name: 'Due',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      address: {type: 'string'},
      dueAmount: {type: 'int', default: 0},
      paidAmount: {type: 'int', default: 0},
      fullName: {type: 'string'},
      phone: {type: 'int'},
      reason: {type: 'string'},

      createdAt: {
        type: 'date',
        default: () => new Date(),
      },
      updatedAt: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}

//----------------- Due Database End--------------------

export class Loaner extends Realm.Object<Loaner> {
  _id!: Realm.BSON.ObjectId | string;

  static schema: ObjectSchema = {
    name: 'Loaner',
    embedded: false,
    asymmetric: false,
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      name: 'string',
      fatherName: 'string',
      motherName: 'string',
      address: 'string',
      mobile: 'int',
      nid: 'int',
      loanAmount: 'int',
      profit: 'int',
      totalInstallment: 'int',
      extraCharge: 'int',
      loanLead: 'int',
      referName: 'string',
      referAddress: 'string',
      referMobile: 'int',
      isLoss: 'mixed',

      createdAt: {
        type: 'date',
        default: () => new Date(),
      },
      updatedAt: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}
// Balance Modal
export class Balance extends Realm.Object<Balance> {
  _id!: Realm.BSON.ObjectId | string;
  balance!: number;

  static schema: ObjectSchema = {
    name: 'Balance',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      balance: 'int',

      createdAt: {
        type: 'date',
        default: () => new Date(),
      },
      updatedAt: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}

// Totals Modal
export class Totals extends Realm.Object<Totals> {
  _id!: Realm.BSON.ObjectId | string;

  static schema: ObjectSchema = {
    name: 'Totals',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      totalBalance: {
        type: 'int',
        default: () => 0,
      },
      totalLoan: {
        type: 'int',
        default: () => 0,
      },
      totalComes: {
        type: 'int',
        default: () => 0,
      },
    },
    primaryKey: '_id',
  };
}
