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
