import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Drawer } from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";

import "./headerbar.scss";
export default function HeaderBar() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const navLinks = [
    { name: "首页", to: "discover" },
    { name: "自我介绍", to: "introduce" },
    { name: "交友信息", to: "messages" },
    { name: "项目地址", to: "address" },
  ];

  return (
    <header className="main-header">
      <div className="container">
        <AlignLeftOutlined className="nav-btn" onClick={showDrawer} />
        <a className="logo" href="https://www.baidu.com">
          <img className="logo-img" src="logo.png" alt="" />
        </a>
        <Drawer
          rootClassName="nav-drawer"
          title="菜单"
          placement="left"
          onClose={onClose}
          open={open}
          width={170}
          closeIcon={null}
        >
          {/* <nav className="nav-bar"> */}
          <ul className="nav-bar-box">
            {navLinks.map((item, index) => (
              <li className="nav-bar-li" key={index} onClick={onClose}>
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
          {/* </nav> */}
        </Drawer>
        <nav className="nav-bar">
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
      </div>
    </header>
  );
}
