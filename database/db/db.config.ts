import SQLite, {
  DatabaseParams,
  TransactionCallback,
} from 'react-native-sqlite-storage';

SQLite.enablePromise(false);

const DB_SUCCESS = (Argus: SQLite.SQLiteDatabase) => {
  // Create And Show All Tables Start
  Argus.transaction(txn => {
    // txn.executeSql('DROP TABLE IF EXISTS table_user', []);
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), email VARCHAR(50), password VARCHAR(50))',
      [],
    );
  });

  // Create And Show All Tables End
};
const DB_ERROR = (Error: SQLite.SQLError) => {
  console.log(Error);
};

export const DB = SQLite.openDatabase(
  {name: 'userDatabase', createFromLocation: 'test.sqlite'},
  DB_SUCCESS,
  DB_ERROR,
);

// export const DB = SQLite.openDatabase(
//   {
//     name: 'userDatabase',
//     createFromLocation: 'test.sqlite',
//     key: 'arifbiswas',
//   },
//   result => {
//     console.log(result);
//   },
//   result => {
//     console.log(result);
//   },
// );
