
// pass data - 
// 1. from parent component to child component - props 
// 2. from child compoment to parent component - ??

// import { useState } from "react";

const EmpData = (props) => {
    console.log('EmpData')

    const childData = 2211;
    // const [childData2, setChildData2] = useState(2);

    // props.normalFun();


    const childFun = () => {
        console.log('childFun');
        // return childData2;
        return childData;
    }

    return (
        <div>
            <p className="display-4 text-primary">Emp Data Component</p>
            {/* <p> childData in child : {childData2}</p> */}
            <p>{props.someData.def}</p>
            <p>{props.numToPassToChild}</p>
            {/* try this  */}
            {/* <p>{props.anotherData}</p> */}
            <p>{props.someOtherData}</p>
            {/* Invoke function from parent  */}
            {/* <p>{props.callParentFun}</p> */}
            <button className="btn btn-primary" onClick={() => { props.callParentFun(childFun) }} >
                Pass data From child To parent</button>
        </div>
    );
}

export default EmpData;
