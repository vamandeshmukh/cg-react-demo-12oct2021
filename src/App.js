
// import { useState } from "react";
import { useEffect, useState } from "react";
import EmpData from "./components/EmpData";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  console.log('Parent component');
  const num = 10;
  const myData = { abc: 15, def: 25 }
  const myArray = [10, 20, 30];

  const [dataFromChild, setDataFromChild] = useState(4);

  useEffect(() => {
    console.log('parent useEffect');
    setDataFromChild(5);
  }, []);

  const parentFun = (arg) => {
    console.log('parentFun');
    setDataFromChild(arg()); // callback
    console.log(dataFromChild);
  }


  return (
    <div>
      <Header />
      <div className="container">
        <p className="display-4 text-primary" >CG React App</p>
        <Hello />
        {/* <Login /> */}
        <Register />
        {/* <p>Child data in parent component: {dataFromChild} </p> */}
        {/* This will not work */}
        {/* <p>{myData} </p> */}
        {/* This will work  */}
        {/* <p>{myData.abc} </p>
        <p>{myData.def} </p>
        <p>{myArray}</p>
        <p>{myArray[0]}</p>
        <p>{num}</p>
        <EmpData
          // normalFun={aNormalFunction}
          callParentFun={parentFun}
          someData={myData}
          numToPassToChild={num}
          anotherData={myData}
        /> */}
      </div>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div>
//       <h1>CG React App</h1>
//       <p>Welcome to Capgemini React App...</p>
//     </div>
//   );
// }
// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;
