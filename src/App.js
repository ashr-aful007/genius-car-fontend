import {  RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router/Router';

function App() {

  return (
    <div className='mx-3'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
