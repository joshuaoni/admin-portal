import React from 'react';
import ActiveUsers from "./ActiveUsers";
import Avatar from "./Avatar";
import Alert from './Alert';

export default function RightSidebar() {
  return (
    <div id='rightSidebar' className='right-side-bar'>
      <Avatar />
      <ActiveUsers />
      <Alert />
    </div>
  );
}
