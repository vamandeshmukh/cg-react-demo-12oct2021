

import { createSlice } from "@reduxjs/toolkit";

// step 3 for redux - create slices for each components 
const EmpSlice = createSlice({

    name: 'emp',

    initialState: {
        empState: {
            eid: 101,
            firstName: 'Sonu',
            salary: 10.5
        }
    },

    reducers: {
        getEmpById: (state, action) => {
            console.log('EmpSlice reducers getEmpById');
            state.empState = action.payload;
        }
        // more methods will be added 
    }
});

export const { getEmpById } = EmpSlice.actions;

export default EmpSlice.reducer;