
import { createSlice } from "@reduxjs/toolkit";
import Employee from "../components/models/Employee";

// step 3 for redux - create slices for each components 
const EmpSlice = createSlice({

    name: 'emp',

    initialState: {
        // empState: {
        //     eid: 101,
        //     firstName: 'Sonu',
        //     salary: 10.5
        // }

        empState: new Employee(),
        empList: []


    },

    reducers: {

        getEmpById: (state, action) => {
            console.log('EmpSlice reducers getEmpById');
            state.empState = action.payload;
        },

        getAllEmps: (state, action) => {
            console.log('EmpSlice reducers getAllEmps');
            state.empList = action.payload;
        }

        // more methods will be added 
    }
});

export const { getEmpById, getAllEmps } = EmpSlice.actions;

export default EmpSlice.reducer;