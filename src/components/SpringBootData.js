import axios from "axios";
import { useEffect, useState } from "react";
import Employee from "./models/Employee";

const SpringBootData = () => {

    // state - for the component 
    const [emp, setEmp] = useState(new Employee());
    const [newEmpObj, setNewEmpObj] = useState(new Employee());
    const [displayEmpObj, setDisplayEmpObj] = useState(new Employee());
    const [empList, setEmpList] = useState([]);

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
        evt.preventDefault();
        axios.post(`http://localhost:8082/emp/addemp`, newEmpObj)
            .then((response) => {
                setDisplayEmpObj(response.data);
                alert('Employee added successfully.');
                setNewEmpObj({ firstName: '', salary: '' })
            })
            .catch(() => {
                alert("Employee could not be added.");
            });
    }

    return (
        <div>

            <p className="display-4 text-primary mt-3">Spring Boot Data</p>
            <p>Search Employee By Id</p>
            <input type="number" id="eid" name="eid" value={emp.eid} onChange={handleEmp} placeholder="Emter eid to search" />
            <input type="submit" name="Find Employee" onClick={submitGetEmpById} />
            <p className="text-primary">{emp.eid} {emp.firstName} {emp.salary}</p>
            <p>----------------</p>
            <div>
                <p>Add New Employee</p>
                {/* <form onSubmit={submitAddEmp}> */}
                <div id="addNewEmpDiv">
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
                        type="submit"
                        // type="button"
                        value="Add Employee"
                        onClick={submitAddEmp}
                    />
                </div>
                {/* </form> */}
                <p>New Employee Data: {displayEmpObj.eid} {displayEmpObj.firstName} {displayEmpObj.salary}</p>
            </div>
            <p>----------------</p>
            <div>
                <div>
                    <p>Get All Employees</p>
                    <input
                        className="btn btn-primary mb-3"
                        type="button"
                        value="Search All Employees"
                        onClick={submitGetAllEmps}
                    />
                </div>
                <div className="col-4">
                    <div className="border border-light">
                    </div>
                </div>
                <p>----------------</p>
            </div>
            {/* Google Material UI Table  */}
            <div>
                <div class="mdc-data-table">
                    <div class="mdc-data-table__table-container">
                        <table class="mdc-data-table__table">
                            <thead>
                                <tr class="mdc-data-table__header-row">
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Eid</th>
                                    <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Name</th>
                                    <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Salary</th>
                                </tr>
                            </thead>
                            <tbody class="mdc-data-table__content">
                                {empList.map((emp, k) => {
                                    return (
                                        <tr k={k} className="mdc-data-table__row" scope="row">
                                            <td className="mdc-data-table__cell">{emp.eid}</td>
                                            <td className="mdc-data-table__cell">{emp.firstName}</td>
                                            <td className="mdc-data-table__cell">{emp.salary}</td></tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpringBootData;
