import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import AppUser from './models/AppUser';

const Register = (props) => {

    const AppUser 


    return (
        <div className="container">
            <p>Register as a new User</p>

        </div >

    )
}
export default Register;




// import React from 'react';
// // import { Link, useHistory } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from "axios";
// import AppUser from './models/AppUser';
// // import $ from 'jquery';

// const Register = (props) => {

//     // const history = useHistory();

//     const [appUser, setAppUser] = useState(new AppUser());
//     const [credentials, setCredentials] = useState('');

//     const handleAppUser = (event) => {
//         console.log(event.target.name);
//         console.log(event.target.value);
//         setAppUser({
//             ...appUser,
//             [event.target.name]: event.target.value
//         });
//     };

//     const submitAppUser = (event) => {

//         axios.post(`http://localhost:8082/register`, appUser)
//             .then((response) => {
//                 console.log(response.data);
//                 localStorage.setItem('appUser', appUser);
//                 alert('You are registered successfully. Please login now.');
//                 // history.push('/login');
//             }).catch((error) => {
//                 console.log(error.response);
//                 setCredentials("Enter proper credentials.");
//             });
//         event.preventDefault();
//     }
//     return (
//         <div className="container">
//             <div className="col-4 mt-3" >
//                 <h1 className="display-4 text-primary">Register</h1>
//                 <form className="form form-group form-dark " onSubmit={submitAppUser}>
//                     <div>
//                         <input
//                             type="text"
//                             className="form-control"
//                             name="userName"
//                             id="userName"
//                             className="form-control mb-3"
//                             placeholder="Enter username"
//                             value={appUser.userName}
//                             onChange={handleAppUser}
//                             required
//                         />
//                         <input
//                             type="password"
//                             className="form-control"
//                             name="password"
//                             id="password"
//                             className="form-control mb-3"
//                             placeholder="Enter password"
//                             value={appUser.password}
//                             onChange={handleAppUser} />
//                         <div class="form-group">
//                             <select class="form-control mb-3" name="role" id="role" onChange={handleAppUser}>
//                                 <option value="Role">Select a role</option>
//                                 <option value="ADMIN">ADMIN</option>
//                                 <option value="EMPLOYEE">EMPLOYEE</option>
//                                 <option value="MANAGER">MANAGER</option>
//                             </select>
//                         </div>
//                         <input
//                             type="submit"
//                             id="submit"
//                             name="submit"
//                             className="form-control btn btn-primary mb-3"
//                             value="Register"
//                             onClick={submitAppUser}
//                         />
//                     </div>
//                 </form>
//                 <p className="text-danger">{credentials}</p>
//                 {/* <Link to="/login" className="btn btn-primary col-12">Already registered? Login</Link> */}
//             </div>
//         </div >

//     )
// }
// export default Register;


