import './App.css';
import { Outlet } from 'react-router-dom';
import Blocks from './components/app_components';

function App() {
  return (
    <>
   <div><Blocks.Header/></div>
   <div className='nav-and-body-cont'>
     <Blocks.Navbar/>
    <Outlet/>
   </div>

   </>
  );
}

export default App;
