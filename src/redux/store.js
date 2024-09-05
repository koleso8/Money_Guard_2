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
  whiteList: ['user'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// import { transactionsReducer } from './transactions/slice';
// import { editingReducer } from './editSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    // transactions: transactionsReducer,
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
