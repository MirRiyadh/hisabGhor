import {Alert} from 'react-native';
import {IUser} from '../interfaces/interface';
import {DB} from '../db/db.config';

export const RegisteredUser = ({email, name, password}: IUser) => {
  DB.transaction(tx => {
    tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
      const user = results.rows.raw().find(item => item?.email == email);
      console.log(user);
      if (user?.email) {
        Alert.alert('Already have', 'This email is already register, go login');
        return {message: 'already have'};
      } else {
        DB.transaction(function (tx) {
          tx.executeSql(
            'INSERT INTO table_user (name, email, password) VALUES (?,?,?)',
            [name, email, password],
            (tx, results) => {
              console.log('Results', results.rowsAffected);

              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Success',
                  'You are Registered Successfully',
                  //   [
                  //     {
                  //       text: 'Ok',
                  //       onPress: () => navigation.navigate('Home'),
                  //     },
                  //   ],
                  //   {cancelable: false},
                );
                return results.rows.raw();
              } else Alert.alert('Registration Failed');
            },
            error => {
              console.log(error);
            },
          );
        });
      }
    });
  });
};

export const getUserData = () => {
  DB.transaction(tx => {
    tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
      return results.rows.raw();
    });
  });
};
export const LoginUser = ({email, password}: IUser) => {
  DB.transaction(tx => {
    tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
      if (email) {
        const user = results.rows.raw().find(item => item?.email == email);
        if (user?.password === password) {
          return {message: 'success', user};
        } else {
          Alert.alert('Login Failed', 'password wrong');
        }
      } else {
        Alert.alert('Login Failed', 'email not valid');
      }
    });
  });
};
