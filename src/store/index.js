import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

import { keys } from '../settings'

const persistConfig = {
  key: keys.persistKey,
  storage,
  blacklist: [
    'home'
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { persistor, store }
