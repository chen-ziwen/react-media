import './App.css';
import NavBar from "./components/navbar";
import FooterBar from './components/footerbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar title="永恒的爱情"></NavBar>
      <main>
        <Outlet />
      </main>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
