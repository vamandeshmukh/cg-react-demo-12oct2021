// https://reactjs.org/docs/context.html 
// Context
// Context provides a way to pass data through the component tree 
// without having to pass props down manually at every level.

// In a typical React application, data is passed top-down (parent to child) via props, 
// but such usage can be cumbersome for certain types of props 
// (e.g. locale preference, UI theme) that are required by many components within an application. 
// Context provides a way to share values like these between components 
// without having to explicitly pass a prop through every level of the tree.

import React, { useEffect, useState } from 'react';
import Hello3 from './Hello3';
import HelloContext from './HelloContext';

const Hello2 = () => {

    const [myStyle, setMyStyle] = useState({ color: 'blue' });

    return (
        <div>
            <p>Hello2 Component</p>
            <p>Data from Hello3</p>
            <HelloContext.Provider value={myStyle}>
                <Hello3 />
            </HelloContext.Provider>
        </div>
    )

}

export default Hello2;





// import { useEffect, useState } from 'react';
// import Hello3 from './Hello3';

// const Hello2 = () => {

//     const [myStyle, setMyStyle] = useState({});

//     useEffect(() => {
//         setMyStyle({ color: 'blue'});

//     }, []);
//     return (
//         <div>
//             <p>Hello2 Component</p>
//             <p>Data from Hello3</p>
//             <Hello3 myStyle={myStyle} />
//         </div>
//     )

// }

// export default Hello2;
