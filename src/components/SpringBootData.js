import axios from "axios";
import { useEffect, useState } from "react";
import Employee from "./models/Employee";

const SpringBootData = () => {

    const [emp, setEmp] = useState(new Employee());
    const [newEmpObj, setNewEmpObj] = useState(new Employee());
    const [empList, setEmpList] = useState();

    const handleEmp = (e) => {
        setEmp({
            ...emp,
            [e.target.name]: e.target.value
        });
    }

    const handleAddEmp = (e) => {
        console.log(e.target.value);
        setNewEmpObj({
            ...newEmpObj,
            [e.target.name]: e.target.value
        });
    }

    const submitGetAllEmps = () => {
        axios.get(`http://localhost:8082/emp/getallemps`)
            .then((response) => {
                setEmpList(response.data);
                console.log(response.data);
                console.log(empList);
            })
            .catch(() => {
                alert('Something is wrong!');
            });
    }

    const submitGetEmpById = (evt) => {
        console.log(emp.eid);
        axios.get(`http://localhost:8082/emp/getempbyid/${emp.eid}`)
            .then((response) => {
                setEmp(response.data);
            })
            .catch(() => {
                setEmp({});
                alert("Employee not found.");
            });
        // evt.preventDefault();
    }

    const submitAddEmp = (evt) => {
        axios.post(`http://localhost:8082/emp/addemp`, newEmpObj)
            .then((response) => {
                setNewEmpObj(response.data);
                alert('Employee added successfully.')
            })
            .catch(() => {
                alert("Employee could not be added.");
            });
        evt.preventDefault();
    }

    return (
        <div>

            <p className="display-4">Spring Boot Data</p>
            <p>Search Employee By Id</p>
            <input type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Emter eid to search" />
            <input type="submit" name="Find Employee" onClick={submitGetEmpById} />
            <p>{emp.eid} {emp.firstName} {emp.salary}</p>
            <p>----------------</p>
            <div>
                <p>Add New Employee</p>
                <form onSubmit={submitAddEmp}>
                    <div>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={newEmpObj.firstName}
                            onChange={handleAddEmp}
                            placeholder="Enter First Name" />
                        <input
                            type="number"
                            id="salary"
                            name="salary"
                            value={newEmpObj.salary}
                            onChange={handleAddEmp}
                            placeholder="Enter salary" />
                        <input
                            // type="button"
                            type="submit"
                            value="Add Employee"
                        // onClick={submitAddEmp} 
                        />
                    </div>
                </form>
                <p>{newEmpObj.eid} {newEmpObj.firstName} {newEmpObj.salary}</p>
            </div>
            <p>----------------</p>
            <div>
                <p>Get All Employees</p>
                <input
                    type="button"
                    value="Search All Employees"
                    onClick={submitGetAllEmps}
                />
            </div>

        </div>
    );
}

export default SpringBootData;
