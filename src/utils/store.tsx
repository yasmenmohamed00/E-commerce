//List products
//List catories
//display products details
//add to card
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/getCatogries'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
    reducer: {
      catogries: todoReducer
    }
});