import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/constactsSlice';
import authorizationReducer from './authorization/authorizationSlice';

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedAuthorizationReducer = persistReducer(
  persistConfig,
  authorizationReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    authorization: persistedAuthorizationReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(
      // console.log('object')
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }
    ),
});

export const persistor = persistStore(store);
// export default store;
