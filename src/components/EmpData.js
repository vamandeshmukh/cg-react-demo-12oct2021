
// pass data - 
// 1. from parent component to child component - props 
// 2. from child compoment to parent component - ??


const EmpData = (props) => {
    return (
        <div>
            <h6>Emp Data Component</h6>
            <p>{props.numToPassToChild}</p>
        </div>
    );
}

export default EmpData;
