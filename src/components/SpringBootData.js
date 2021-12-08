import axios from "axios";
import { useState } from "react";
import Employee from "./models/Employee";

const SpringBootData = () => {

    const [emp, setEmp] = useState(new Employee());

    const handleEmp = (e) => {
        setEmp({
            ...emp,
            [e.target.name]: e.target.value
        });
    }

    // useEffect

    const submitEmp = () => {
        console.log(emp.eid);
        axios.get(`http://localhost:8082/emp/getempbyid/${emp.eid}`)
            .then((response) => {
                setEmp(response.data);
            })
            .catch(() => {
                alert("Employee not found.");
            });
    }

    return (
        <div>

            <p className="display-4">Spring Boot Data</p>
            <input type="number" name="eid" value={emp.eid} onChange={handleEmp} />
            <input type="submit" name="Find Employee" onClick={submitEmp} />

            <p>{emp.eid} {emp.firstName} {emp.salary}</p>

        </div>
    );

}

export default SpringBootData;
