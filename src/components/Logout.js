import { useHistory } from "react-router";

const Logout = () => {

    const history = useHistory();
    sessionStorage.setItem('isUserLoggedIn', false);
    sessionStorage.clear();
    alert("Logged out successfully...");
    window.location.assign('/');
    // history.push("/login");
    return null;

}
export default Logout;

// import { useHistory } from "react-router-dom";

// const Logout = () => {

//     const history = useHistory();

//     const submitLogOut = () => {
//         sessionStorage.setItem('isUserLoggedIn', false);
//         sessionStorage.clear();
//         history.push("/login");
//     }

//     return (
//         <div className="container">
//             <div className="col-4 mt-3" >
//                 <h1 className="display-4 text-primary">Logout</h1>
//                 <div >
//                     <input
//                         type="submit"
//                         id="submit"
//                         name="submit"
//                         className="form-control btn btn-primary mb-3"
//                         value="Logout"
//                         onClick={submitLogOut}
//                     />
//                 </div>
//             </div>
//         </div >
//     );
// }
// export default Logout;



// const Logout = () => {

//     // Source: https://getbootstrap.com/docs/4.0/components/modal/

//     // incomplete   

//     return (
//         <div className="mt-3 mb-3">
//             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                 Logout
//             </button>
//             <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
//                 <div class="modal-dialog" role="document">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title text-primary" id="exampleModalLabel">Logout</h5>
//                             <button type="button" class="close" data-dismiss="modal">
//                                 <span>&times;</span>
//                             </button>
//                         </div>
//                         <div class="modal-body">
//                             Are you sure you want to logout?
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-success" data-dismiss="modal">Logout</button>
//                             <button type="button" class="btn btn-primary">Stay logged in</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Logout;