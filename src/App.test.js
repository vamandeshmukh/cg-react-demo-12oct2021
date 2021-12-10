import { render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
import Hello from './components/Hello';
import EmpData from './components/EmpData';
import SpringBootData from './components/SpringBootData';
import { Provider } from 'react-redux';
import store from './redux/store';


// Website https://jestjs.io/ 
// learning resources https://jestjs.io/docs/getting-started  
//api https://jestjs.io/docs/api  


// positive test case 
test('render Data from Hello', () => {
  render(<Hello />);
  const linkElement = screen.getByText(/Data from backend/);
  expect(linkElement).toBeInTheDocument();
});

// positive test case 
test('render Data from EmpData', () => {
  render(
    <Provider store={store} >
      <EmpData />
    </Provider>);
  const linkElement = screen.getByText('Employee Component');
  expect(linkElement).toBeInTheDocument();
});

// positive test case 
test('render Data from SpringBootData', () => {
  render(
    <Provider store={store} >
      <SpringBootData />
    </Provider>);
  const linkElement = screen.getByText('Get All Employees');
  expect(linkElement).toBeInTheDocument();
});


// // negative test case 
// test('not to render wrong data', () => {
//   render(<Hello />);
//   const linkElement = screen.getByText(/Capgemini is a good company./);
//   expect(linkElement).not.toBeInTheDocument();
// });


// test('a string value that describes this test', () => { });

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
