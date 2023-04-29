import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import testSlice from './testSlice';
import catSlice from './Cat_slice';
import SubcatSlice from './Sub_catSlice';
import testSlice2 from './testSlice2';

const rootReducer = combineReducers({
        testSlice,
        catSlice,
        SubcatSlice
})
// const storageReducer = combineReducers({
//     testSlice2
// })
// const persistConfig = {
//     key: 'persisted',
//     storage,
//     whitelist: ['persistedData'],
// };


// const persistedStore = configureStore({
//     reducer: persistReducer(persistConfig, storageReducer),
// });

const temporaryStore = configureStore({
    reducer: rootReducer,
});

// const persistor = persistStore(persistedStore);
export { temporaryStore };
