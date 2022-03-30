import './App.css';
import { Outlet } from 'react-router-dom';
import Blocks from './components/app_components';

function App() {
  return (
    <div className='app-page'>
   <div><Blocks.Header/></div>
   <div className='nav-and-body-cont'>
     <Blocks.Sidebar/>
    <Outlet/>
   </div>
   <div><Blocks.Footer/></div>

   </div>
  );
}

export default App;
