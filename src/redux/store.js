import empReducer from './EmpSlice';

// steps - 
// 1. create store - only one 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. use slices in components 

import { configureStore } from "@reduxjs/toolkit";

// note - redux store can be created in multiple different ways. 
// latest way 

// step 1 for redux 
const store = configureStore(
    {
        reducer: {
            emp: empReducer
            // ,
            // anotherComponent: anotherComponentReducer
        }
    }
);

export default store;