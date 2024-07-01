
//persisit work
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import root from './Redux/reducer';
import { thunk } from 'redux-thunk';

// Set up configuration for persistence
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['common']
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, root);

// Create the store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

// Create the persistor
const persistor = persistStore(store);
export { store, persistor };