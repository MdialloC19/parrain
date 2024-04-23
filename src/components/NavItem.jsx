import React from "react";

function NavItem({ title, icon }) {
  return (
    <div className="nav-item">
      {icon}
      <p className="title">{title}</p>
    </div>
  );
}

export default NavItem;
