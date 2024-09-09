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
import { currencyReducer } from './currency/slice';
import { authReducer } from './auth/slice';
import { transactionsReducer } from './transactions/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: [],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['currencies', 'lastRequestTime'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const currencyPersistedReducer = persistReducer(
  currencyPersistConfig,
  currencyReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    currency: currencyPersistedReducer,
    transactions: transactionsReducer,
    // editing: editingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
