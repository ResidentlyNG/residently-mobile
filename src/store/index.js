import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'profile', 'wallet'],
  transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: () => {
        // Handle the error.
      },
    }),
  ],
};

function getMiddlewares() {
  // eslint-disable-next-line no-undef
  if (__DEV__) {
    return applyMiddleware(ReduxThunk, logger);
  }

  return applyMiddleware(ReduxThunk);
}

// const middleware = [ReduxThunk, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, getMiddlewares());

const persistor = persistStore(store);

export { persistor, store };
