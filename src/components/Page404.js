import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>The page you are looking for is not found.</p>
            <Link className="btn btn-primary" to="/home" >Let's go home...</Link>

        </div>
    );
}

export default Page404;