import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userApi } from './feature/user/userApi';
import { iphoneApi } from './feature/iphone';

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            [userApi.reducerPath]: userApi.reducer,
            [iphoneApi.reducerPath]: iphoneApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userApi.middleware, iphoneApi.middleware)
    });

    setupListeners(store.dispatch);
    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
