import empReducer from './EmpSlice';
import depReducer from './DepSlice';

// steps - 
// 1. create store - only one 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. use slices in components 

import { configureStore } from "@reduxjs/toolkit";

// note - redux store can be created in multiple different ways. 
// latest way 

// step 1 for redux  
console.log('store');
const store = configureStore(
    {
        reducer: {
            emp: empReducer,
            dep: depReducer
            // ,
            // anotherComponent: anotherComponentReducer
        }
    }
);

export default store;