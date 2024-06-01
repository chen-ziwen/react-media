import "./App.scss";

// import "./util/auto-rem"; // 自动计算rem
import HeaderBar from "./components/haaderbar";
import FooterBar from "./components/footerbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App" data-theme="light">
      <HeaderBar></HeaderBar>
      <main className="main">
        <Outlet />
      </main>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
