const Header = () => {

    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                        height="24px" alt="Capgemini" />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item">
                                <sapn className="nav-link" to="/#" >Home</sapn>
                            </li>
                            <li className="nav-item">
                                <sapn className="nav-link" to="/#" >Register</sapn>
                            </li>
                            <li className="nav-item">
                                <sapn className="nav-link" to="/#" >Login</sapn>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;




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
// import React from "react";
// class Header extends React.Component {

//     // constructor() { super(); }

//     render = () => {
//         return (
//             <div className="display-4" >
//                 <p>Header Component</p>
//             </div>
//         )
//     }
// }
// export default Header;
