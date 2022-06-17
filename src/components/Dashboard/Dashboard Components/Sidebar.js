import React from 'react';

import { RiNeteaseCloudMusicLine } from "react-icons/ri";
import { HiCloudDownload } from 'react-icons/hi';
import { BiGroup, BiBell } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiAnalogue } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";

export default function Sidebar() {
  return (
    <div id="sidebar" className='sidebar'>
      <div className='brand'>
        <RiNeteaseCloudMusicLine />
      </div>
      <ul className='links'>
        <li className='selected'>
          <SiAnalogue />
        </li>
        <li>
          <HiCloudDownload />
        </li>
        <li>
          <BiBell />
        </li>
        <li>
          <AiOutlineDollarCircle />
        </li>
        <li>
          <BiGroup />
        </li>
      </ul>
      <div className='help'>
        <FiHelpCircle />
      </div>
    </div>
  );
}

