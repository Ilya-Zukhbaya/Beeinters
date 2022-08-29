import React from 'react';
import './Menu.css';

export const Menu = ({ header, items, active, setActive }) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul className="menu-ul">
          {items.map((item, id) => (
            <li className="menu-li" key={id}>
              <a href={item.href}>{item.value}</a>
              <img src={item.icon} alt="topbar-icon" width={30} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
