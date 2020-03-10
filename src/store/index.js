import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers';

import { config } from '../config'

const persistConfig = {
  key: config.persistKey,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(reducers);

const persistor = persistStore(store)

export default { persistor, store };
