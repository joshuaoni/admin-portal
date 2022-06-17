import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import india from "../../../assets/india.png";
import canada from "../../../assets/canada.png";
import united from "../../../assets/united.png";
import austallia from "../../../assets/austallia.png";
import france from "../../../assets/france.png";
import nigeria from "../../../assets/nigeria.png";

export default function ActiveUsers() {
  const countries = [
    {
      name: "India",
      amount: 64,
      image: india,
    },
    {
      name: "United States",
      amount: 24,
      image: united,
    },
    {
      name: "Nigeria",
      amount: 13,
      image: nigeria,
    },
    {
      name: "Canada",
      amount: 10,
      image: canada,
    },
    {
      name: "France",
      amount: 64,
      image: france,
    },
    {
      name: "United States",
      amount: 24,
      image: united,
    },
    {
      name: "Nigeria",
      amount: 13,
      image: nigeria,
    },
    {
      name: "Canada",
      amount: 10,
      image: canada,
    },
    {
      name: "India",
      amount: 64,
      image: india,
    },
    {
      name: "United States",
      amount: 24,
      image: united,
    },
    {
      name: "Nigeria",
      amount: 13,
      image: nigeria,
    },
    {
      name: "Canada",
      amount: 10,
      image: canada,
    },
    {
      name: "India",
      amount: 64,
      image: india,
    },
    {
      name: "United States",
      amount: 24,
      image: united,
    },
    {
      name: "Nigeria",
      amount: 13,
      image: nigeria,
    },
    {
      name: "Canada",
      amount: 10,
      image: canada,
    },
    {
      name: "India",
      amount: 64,
      image: india,
    },
    {
      name: "United States",
      amount: 24,
      image: united,
    },
    {
      name: "Nigeria",
      amount: 13,
      image: nigeria,
    },
    {
      name: "Canada",
      amount: 10,
      image: canada,
    },
    {
      name: "Australia",
      amount: 4,
      image: austallia,
    },
    {
      name: "France",
      amount: 22,
      image: france,
    },
    {
      name: "India",
      amount: 64,
      image: india,
    },
    {
      name: "United States",
      amount: 24,
      image: united,
    },
    {
      name: "Nigeria",
      amount: 13,
      image: nigeria,
    },
    {
      name: "Canada",
      amount: 10,
      image: canada,
    },
    {
      name: "Australia",
      amount: 4,
      image: austallia,
    },
    {
      name: "France",
      amount: 22,
      image: france,
    },
  ];
  const data = [
    {
      data: 3800,
    },
    {
      data: 3900,
    },
    {
      data: 4000,
    },
    {
      data: 4100,
    },
    {
      data: 4200,
    },
    {
      data: 4300,
    },
    {
      data: 4400,
    },
    {
      data: 4500,
    },
    {
      data: 4600,
    },
    {
      data: 4700,
    },
    {
      data: 4800,
    },
    {
      data: 4900,
    },
    {
      data: 5100,
    },
    {
      data: 5200,
    },
    {
      data: 5300,
    },
    {
      data: 5400,
    },
    {
      data: 5500,
    },
    {
      data: 5600,
    },
    {
      data: 6000,
    },
    {
      data: 6300,
    },
    {
      data: 6580,
    },
    {
      data: 6500,
    },
    {
      data: 6300,
    },
    {
      data: 6500,
    },
    {
      data: 6700,
    },
    {
      data: 7000,
    },
    {
      data: 7300,
    },
    {
      data: 7500,
    },
    {
      data: 7700,
    },
  ];
  
  return (
    <div className='active-users'>
      <div className="title-cont">
        <div className="title">
          <h4>Users Now</h4>
          <h1>1,186</h1>
        </div>
        <div className="chart">
          <div className="percent">+12.3%</div>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart  data={data}>
              <defs>
                <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="10%"
                    stopColor="#2e2b46"
                    stopOpacity={0.4}
                  />
                  <stop offset="100%" stopColor="#000000ff" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="data"
                stroke="#2e2b46"
                strokeWidth={2}
                fill="url(#colorview)"
                animationBegin={500}
                animationDuration={1000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="active">
        {countries.map((data, index) => {
          return (
            <div className="country" key={index}>
              <div className="name">
                <img src={data.image} alt={data.name} />
                <h5>{data.name}</h5>
              </div>
              <h5>{data.amount}%</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}


