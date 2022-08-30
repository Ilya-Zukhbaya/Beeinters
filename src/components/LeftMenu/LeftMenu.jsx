import React from 'react';
import { Link } from 'react-router-dom';
import '../Menu/Menu.css';

export const LeftMenu = ({ header, items, active, setActive }) => {
  return (
    <div className={active ? 'menu active' : 'menu'}>
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul className="menu-ul secMenu-ul">
          {items.map((item, id) => (
            <li className={item.class} key={id} onClick={item.onClick}>
              {item.icon ? (
                <img src={item.icon} alt={item.value} width={10} className="leftItem-icon" />
              ) : (
                ''
              )}
              <Link to={item.href}>{item.value}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
