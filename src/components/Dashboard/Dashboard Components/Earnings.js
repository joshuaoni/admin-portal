import React from 'react';

export default function Earnings() {
  const earningsData = [
    {
      progress: 45,
      amount: '3,125',
    },
    {
      progress: 55,
      amount: '2,731',
    },
    {
      progress: 65,
      amount: '1,315',
    },
    {
      progress: 100,
      amount: '1,012',
    },
  ];
  return (
    <div className='earnings card-style'>
      <div className="title-cont">
        <div className="title">
          <h4>Earnings</h4>
          <h1>$7,850</h1>
        </div>
        <span className="pointer more">Show More</span>
      </div>
      <div className="earned">
        {earningsData.map(({ progress, amount }) => {
          return (
            <div className="earning" key={amount}>
              <div className="data">
                <h5>{progress === 100 ? "FUNDS CLEARED" : "CLEARING"}</h5>
                <h5>${amount}</h5>
              </div>
              <progress
                max={100}
                value={progress}
                className={progress === 100 ? "cleared" : ""}
              />
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

