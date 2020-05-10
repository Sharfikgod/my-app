import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsItem from "./FriendsItem";

const Navbar = () => {

  // let friendsElements = infoFriends.friends.map((friends) => (
  //   <FriendsItem name={friends.name} id={friends.id} />
  // ));
  
  return (
    <nav className={s.nav}>
      <div className={s.item}> 
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.friends}>
        <h2>Friends</h2>
        <div className={s.friends_elements}>
          <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" />
          <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" />
          <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" />
            
          </div>
          <div className={s.friends_elements_text}>{}</div>
        </div>
    </nav>
  );
};

export default Navbar;
