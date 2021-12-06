
// pass data - 
// 1. from parent component to child component - props 
// 2. from child compoment to parent component - ??

const EmpData = (props) => {

    const childData = 2211;

    const childFun = () => {
        return childData;
    }
    return (
        <div>
            <h6>Emp Data Component</h6>
            <p>{props.someData.def}</p>
            <p>{props.numToPassToChild}</p>
            {/* try this  */}
            {/* <p>{props.anotherData}</p> */}
            <p>{props.someOtherData}</p>
            {/* Invoke function from parent  */}
            <p>{props.callParentFun}</p>
        </div>
    );
}

export default EmpData;
