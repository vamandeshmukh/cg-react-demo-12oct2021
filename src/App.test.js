import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Hello from './components/Hello';

// act(); 

// positive test case 
test('render Data from backend', () => {
  render(<Hello />);
  const linkElement = screen.getByText(/Data from backend/);
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
