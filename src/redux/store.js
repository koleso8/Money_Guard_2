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

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';
import { editingReducer } from './editSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
    editing: editingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
