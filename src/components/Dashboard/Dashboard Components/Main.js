import React from 'react';
import Earnings from "./Earnings";
import Navbar from "./Navbar";
import Developers from "./Developers";
import TargetAudeince from "./TargetAudeince";
import TopProjects from "./TopProjects";

export default function Dashboard() {
  // useEffect(() => {
  //   const sr = scrollreveal({
  //     origin: "bottom",
  //     distance: "80px",
  //     duration: 2000,
  //     reset: false,
  // });
  //   sr.reveal(
  //     `
  //       .nav,
  //       .row,
  //       .row2
  //   `,
  //     {
  //       opacity: 0,
  //       interval: 100,
  //     }
  //   );
  // }, []);
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


