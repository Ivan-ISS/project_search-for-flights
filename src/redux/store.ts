import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './slices/ticketSlice';

export const store = configureStore({
    reducer: {
        dataTicket: dataSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;