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
      serial: {type: 'int'},
      address: {type: 'string'},
      dueAmount: {type: 'int', default: 0},
      paidAmount: {type: 'int', default: 0},
      fullName: {type: 'string'},
      phone: {type: 'int'},
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
