import React, {useEffect} from 'react';
import scrollreveal from 'scrollreveal';
import './Dashboard.css';
import Main from "./Dashboard Components/Main";
import RightSidebar from "./Dashboard Components/RightSidebar";
import Sidebar from "./Dashboard Components/Sidebar";


const Dashboard = () => {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
       #sidebar
    `,
      {
        opacity: 0,
      }
    );
    const sr2 = scrollreveal({
      origin: "right",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr2.reveal(
      `
       #rightSidebar
    `,
      {
        opacity: 0,
      }
    );
  }, []);

  window.addEventListener('resize', function () {
    // if (window.matchMedia('(min-width:429px').matches) {
    // }
    this.window.location.reload();
  })

    return (
      <div className='dash-body'>
        <div className="dashboard">
          <Sidebar />
          <Main />
          <RightSidebar />
        </div> 
      </div>
      );
}
 
export default Dashboard;