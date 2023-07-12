import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['favorites'] // only favorites will be persisted
}

export { persistConfig };
