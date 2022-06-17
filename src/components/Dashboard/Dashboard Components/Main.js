import React from 'react';
import Earnings from "./Earnings";
import Navbar from "./Navbar";
import Developers from "./Developers";
import TargetAudeince from "./TargetAudeince";
import TopProjects from "./TopProjects";

export default function Dashboard() {
  
  return (
    <div className="main">
      <Navbar />
      <div className="grid">
        <div className="row">
          <Developers />
          <Earnings />
        </div>
        <div className="row2">
          <TargetAudeince />
          <TopProjects />
        </div>
      </div>
    </div>
  );
}


