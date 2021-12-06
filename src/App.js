
import { useEffect } from "react";
import EmpData from "./components/EmpData";
import Header from "./components/Header";

const App = () => {
  const num = 10;
  const myData = { abc: 15, def: 25 }
  const myArray = [10, 20, 30];

  let dataFromChild = 0;

  useEffect(() => {
    dataFromChild = 45;
  }, []);

  const parentFun = (arg) => {
    console.log('parentFun');
    dataFromChild = arg(); // callback
    console.log(dataFromChild);
  }

  // const aNormalFunction = () => {
  //   console.log('normal funciton');
  // }

  return (
    <div>
      <Header />
      <h1>CG React App</h1>
      <p> {dataFromChild} </p>

      {/* This will not work */}
      {/* <p>{myData} </p> */}
      {/* This will work  */}
      <p>{myData.abc} </p>
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
      />
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
