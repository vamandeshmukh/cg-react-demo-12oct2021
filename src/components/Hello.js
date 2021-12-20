import { useEffect, useState } from "react";
import axios from 'axios';
import Hello2 from './Hello2';

const Hello = () => {

    const [message, setMessage] = useState();

    useEffect(() => {
        setMessage('dummy value meanwhile...');
        axios.get('http://localhost:8082/hello')
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return (
        <div className="container">
            {/* <h1 className="display-4 text-primary mt3">Hello</h1>
            <p> Data from backend: {message}</p> */}
            <p>Hello Component</p>
            <p>Data from Hello2</p>
            <Hello2 />
        </div>
    )
}

export default Hello;