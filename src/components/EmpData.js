
const EmpData = (props) => {
    console.log('Child component');
    return (
        <div>
            <h1 className="display-4 text-primary mt-3" >Employee Data Component</h1>
            <p>Employee data component</p>
        </div>
    );
}
export default EmpData;

// // props - arguments to a component 
// // pass data - 
// // 1. from parent component to child component - props 
// // 2. from child compoment to parent component - ??

// import { useEffect, useState } from "react";

// // import { useState } from "react";

// const EmpData = (props) => {
//     console.log('Child component');

//     // state - one object for a component to store all the data in that component
//     // in function component, state can be created with useState(); hook (hook means method)    
//     // syntax const [variableName, setVariableName] = useState(initial value);
//     // const [eid, setEid] = useState(0);
//     // const [ename, setEname] = useState('');
//     // const [isAvailable, setIsAvailable] = useState(false);
//     // const [emp, setEmp] = useState({});
//     // const [cities, setCities] = useState([]);

//     // const childData = 2211;
//     const [childData, setChildData] = useState(1);
//     // const [childData2, setChildData2] = useState(1); // multipple variables are also possible 

//     // optionally, state can be initialized with useEffect(); 
//     // useEffect(arg, arg2);

//     useEffect(() => {
//         console.log('Child useEffect');
//         setChildData(41548);
//     }
//         , []);

//     const childFun = () => {
//         console.log('childFun');
//         return childData;
//     }

//     return (
//         <div>
//             <p className="display-4 text-primary">Emp Data Component</p>
//             <p> Child data in child component :  {childData}</p>

//             {/* <p>{props.someData.def}</p> */}
//             <p>{props.numToPassToChild}</p>
//             {/* try this  */}
//             {/* <p>{props.anotherData}</p> */}
//             <p>{props.someOtherData}</p>
//             {/* Invoke function from parent  */}
//             {/* <p>{props.callParentFun}</p> */}
//             {/* <button className="btn btn-primary" onClick={() => { props.callParentFun(childFun) }} > */}
//             Pass data From child To parent</button>
//         </div >
//     );
// }

// export default EmpData;
