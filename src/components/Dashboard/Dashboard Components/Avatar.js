import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import avatar from "../../../assets/avatar.png";

export default function Avatar() {
  return (
    <div className='avatar'>
      <div className="image">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="name">
        <span>Joshua Oni</span>
        <BiChevronDown />
      </div>
    </div>
  );
}
