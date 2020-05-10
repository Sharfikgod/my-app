import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";


const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://logobaker.ru/media/uploads/userapi/logos/14888/400_300_2432-panda-global-logotype.png" />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login
       : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
