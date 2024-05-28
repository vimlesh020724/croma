import './App.css';
import Header from './componets/Header';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <main className='bg-[#191919]'>
    <Outlet />
    </main>
    </>
  );
}

export default App;
