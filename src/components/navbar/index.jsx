import "./navbar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navLinks = [
    { name: "首页", to: "discover" },
    { name: "自我介绍", to: "introduce" },
    { name: "交友信息", to: "messages" },
    { name: "项目地址", to: "address" },
  ];

  return (
    <nav className="nav-bar">
      <i></i>
      <ul className="nav-bar-box">
        {navLinks.map((item, index) => (
          <li className="nav-bar-li" key={index}>
            <NavLink
              to={item.to}
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
