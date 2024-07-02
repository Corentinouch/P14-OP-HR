// src/employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    employees: [],
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        setEmployees: (state, action) => {
            state.employees = action.payload;
        },
    },
});

export const { addEmployee, setEmployees } = employeeSlice.actions;

export default employeeSlice.reducer;
