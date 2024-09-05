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

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   whiteList: ['contacts'],
// };

const currencyPersistConfig = {
	key: 'currency',
	storage,
	whitelist: ['currencies', 'lastRequestTime'],
};

// const persistedReducer = persistReducer(persistConfig, authReducer);

// import { transactionsReducer } from './transactions/slice';
// import { editingReducer } from './editSlice';
// import { authReducer } from './auth/slice';

export const store = configureStore({
	reducer: {
		// auth: persistedReducer,
		// transactions: transactionsReducer,
		// editing: editingReducer,
		currency: persistReducer(currencyPersistConfig, currencyReducer),
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
