import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../src/components/employeeSlice';

export const store = configureStore({
    reducer: {
        employees: employeeReducer,
    },
});

export default store;
