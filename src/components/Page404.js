import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Phe page you are looking for is not found.</p>
            <Link to="/home" >Let's go home...</Link>

        </div>
    );
}

export default Page404;