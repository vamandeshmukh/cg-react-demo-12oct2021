import axios from 'axios';

// Create services for other components in this way. 

const getEmpByIdService = (eid) => {
    console.log(`getEmpByIdService`);
    return axios.get(`/emp/getempbyid/${eid}`);
}
const getAllEmpsService = () => {
    console.log(`getEmpByIdService`);
    return axios.get(`/emp/getallemps`);
}

const addEmpService = (emp) => {
    console.log(`getEmpByIdService`);
    return axios.post(`/emp/addemp`, emp);
}

const updateEmpService = (emp) => {
    console.log(`getEmpByIdService`);
    return axios.post(`/emp/updateemp`, emp);
}

const deleteEmpService = (eid) => {
    console.log(`getEmpByIdService`);
    return axios.post(`/emp/deleteempbyid${eid}`);
}

const getEmpByNameService = (firstName) => {
    console.log(`getEmpByIdService`);
    return axios.post(`/emp/getbyname/${firstName}`);
}

export { getEmpByIdService, getAllEmpsService, addEmpService, updateEmpService, deleteEmpService, getEmpByNameService };
