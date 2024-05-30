import './App.scss';
import NavBar from "./components/navbar";
import FooterBar from './components/footerbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main className='main'>
        <Outlet />
      </main>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
