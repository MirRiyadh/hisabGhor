import React, {useEffect} from 'react';
import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Balance, Installments, Loaner, Printer, Totals} from './modals/modals';
import SplashScreen from 'react-native-splash-screen';
import ContextApi from '../../src/context/ContextApi';

// Loaner Modal

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Loaner, Balance, Installments, Totals, Printer],
};

// Create a realm context
export const {RealmProvider, useObject, useQuery, useRealm} =
  createRealmContext(realmConfig);

// Expose a realm
function AppWrapper() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <RealmProvider>
      <ContextApi />
    </RealmProvider>
  );
}

export default AppWrapper;
