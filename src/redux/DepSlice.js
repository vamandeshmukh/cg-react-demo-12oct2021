import { createSlice } from "@reduxjs/toolkit";

const DepSlice = createSlice(

    {

        name: 'dep',

        initialState: {
            depState: {
                did: 10,
                dName: 'HR'
            }
        },

        reducers: {
            getDepById: (state, action) => {
                state.depState = action.payload;
            }
        }
    }
);

export const { getDepById } = DepSlice.actions;

export default DepSlice.reducer;