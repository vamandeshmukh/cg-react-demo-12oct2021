
// types of components in react 
// 1. function components 
// 2. class components 


// function component 
// const Header = () => {

//     return (
//         <div className="display-4">
//             <p>Header Component</p>
//         </div>
//     );
// }
// export default Header;

// class component  
import React from "react";
class Header extends React.Component {

    // constructor() { super(); }

    render = () => {
        return (
            <div className="display-4" >
                <p>Header Component</p>
            </div>
        )
    }
}
export default Header;
