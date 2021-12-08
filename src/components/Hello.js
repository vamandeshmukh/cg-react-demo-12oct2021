import { useEffect, useState } from "react";
import axios from 'axios';

const Hello = () => {

    const [message, setMessage] = useState();

    useEffect(() => {
        console.log('Hello useEffect');
        setMessage('dummy value meanwhile...');

        // axios.get('http://localhost:8082/hello')
        //     .then(() => { })
        //     .catch(() => { });

        axios.get('http://localhost:8082/hello')
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <div>
            <h1 className="display-4 text-primary mt3">Hello</h1>
            <p> Data from backend: {message}</p>
        </div>
    )
}

export default Hello;