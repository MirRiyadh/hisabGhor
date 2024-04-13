import Realm, {ObjectSchema} from 'realm';

//----------------- Due Database Start--------------------

export class Due extends Realm.Object<Due> {
  _id!: Realm.BSON.ObjectId;

  static schema: ObjectSchema = {
    name: 'Due',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      serial: {type: 'int'},
      address: {type: 'string'},
      dueAmount: {type: 'int', default: 0},
      paidAmount: {type: 'int', default: 0},
      fullName: {type: 'string'},
      phone: {type: 'int'},
      date: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}
export class DuePaid extends Realm.Object<DuePaid> {
  _id!: Realm.BSON.ObjectId;

  static schema: ObjectSchema = {
    name: 'DuePaid',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      refer_id: 'objectId',
      serial: {type: 'int'},
      paidAmount: {type: 'int', default: 0},
      reason: {type: 'string'},
      date: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}

//----------------- Due Database End--------------------
//----------------- Loan Database Start--------------------

export class Loan extends Realm.Object<Loan> {
  _id!: Realm.BSON.ObjectId;

  static schema: ObjectSchema = {
    name: 'Loan',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      serial: {type: 'int'},
      address: {type: 'string'},
      loanAmount: {type: 'int', default: 0},
      paidAmount: {type: 'int', default: 0},
      fullName: {type: 'string'},
      phone: {type: 'int'},
      date: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}
export class LoanPaid extends Realm.Object<LoanPaid> {
  _id!: Realm.BSON.ObjectId;

  static schema: ObjectSchema = {
    name: 'LoanPaid',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      refer_id: 'objectId',
      serial: {type: 'int'},
      paidAmount: {type: 'int', default: 0},
      reason: {type: 'string'},
      date: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}

//----------------- Loan Database End--------------------
//----------------- Savings Database Start--------------------

export class Savings extends Realm.Object<Savings> {
  _id!: Realm.BSON.ObjectId;

  static schema: ObjectSchema = {
    name: 'Savings',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      serial: {type: 'int'},
      savingsAmount: {type: 'int', default: 0},
      paidAmount: {type: 'int', default: 0},
      title: {type: 'string'},
      phone: {type: 'int'},
      date: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}

export class SavingsPaid extends Realm.Object<SavingsPaid> {
  _id!: Realm.BSON.ObjectId;

  static schema: ObjectSchema = {
    name: 'SavingsPaid',
    properties: {
      _id: {
        type: 'objectId',
        default: () => new Realm.BSON.ObjectId(),
      },
      refer_id: 'objectId',
      serial: {type: 'int'},
      paidAmount: {type: 'int', default: 0},
      reason: {type: 'string'},
      date: {
        type: 'date',
        default: () => new Date(),
      },
    },
    primaryKey: '_id',
  };
}

//----------------- Saving Database End--------------------
