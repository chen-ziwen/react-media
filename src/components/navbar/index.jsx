import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar({ title = "标题" }) {
  const [searchbox, setsearchbox] = useState(false);

  const navLinks = [
    { name: "首页", to: "discover" },
    { name: "自我介绍", to: "introduce" },
    { name: "交友信息", to: "messages" },
    { name: "项目地址", to: "address" },
  ];

  return (
    <nav className="nav-bar">
      {title}
      <ul>
        {navLinks.map((item, index) => (
          <li key={index}>
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
