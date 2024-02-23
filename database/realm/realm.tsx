import React, {useEffect} from 'react';
import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Balance, Loaner, Totals} from './modals/modals';
import ContextApi from '../../src/context/ContextApi';

// Loaner Modal

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Loaner, Balance, Totals],
};

// Create a realm context
export const {RealmProvider, useObject, useQuery, useRealm} =
  createRealmContext(realmConfig);

// Expose a realm
function AppWrapper() {
  return (
    <RealmProvider>
      <ContextApi />
    </RealmProvider>
  );
}

export default AppWrapper;
