import React from 'react'; 
import { AreaChart, Area, Tooltip, ResponsiveContainer, } from "recharts";
import react from "../../../assets/react.png";
import c from "../../../assets/c#.png";
import python from "../../../assets/python.png";
import dev from "../../../assets/dev.png";

export default function Developers() {
  const data = [
    {
      data: 6780,
    },
    {
      data: 6680,
    },
    {
      data: 6500,
    },
    {
      data: 6300,
    },
    {
      data: 5900,
    },
    {
      data: 5700,
    },
    {
      data: 5500,
    },
    {
      data: 5300,
    },
    {
      data: 5100,
    },
    {
      data: 5090,
    },
    {
      data: 5300,
    },
    { data: 4500 },
    {
      data: 5000,
    },
    {
      data: 4700,
    },
    {
      data: 4400,
    },
    {
      data: 4800,
    },
    {
      data: 5300,
    },
    {
      data: 5800,
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
    {
      data: 8090,
    },
    {
      data: 8190,
    },
    {
      data: 7990,
    },
    {
      data: 5800,
    },
    {
      data: 6000,
    },
    {
      data: 6300,
    },
    {
      data: 6780,
    },

    {
      data: 7700,
    },
    {
      data: 7500,
    },
    {
      data: 7300,
    },
    {
      data: 7000,
    },
    {
      data: 6700,
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
      data: 6780,
    },
    {
      data: 6300,
    },
    {
      data: 6000,
    },
    {
      data: 5800,
    },

    {
      data: 5490,
    },
    {
      data: 6000,
    },
    {
      data: 8000,
    },
  ];
  const sliderData = [
    {
      image: dev,
      serviceName: "Code",
    },
    {
      image: react,
      serviceName: "React",
    },
    {
      image: python,
      serviceName: "Python",
    },
    {
      image: c,
      serviceName: "C#",
    },
  ];
  return (
    <div className='developers card-style'>
      <div className='title-cont'>
        <div className='title'>
          <h4>Developers</h4>
          <h1>50,210</h1>
        </div>
        <div className='slider'>
          <div className='services'>
            {sliderData.map(({image, serviceName}) => {
              return (
                <div className='service' key={serviceName}>
                  <img alt='' src={image} />
                  <h6>{serviceName}</h6>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='chart'>
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='colorview' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='10%'
                  stopColor='#1c174c'
                  stopOpacity={0.4}
                ></stop>
                <stop
                  offset='100%'
                  stopColor='#000000ff'
                  stopOpacity={0}
                ></stop>
              </linearGradient>
            </defs>
            <Tooltip />
            <Area 
              type='monotone'
              dataKey='data'
              stroke='#1c174c'
              strokeWidth={2}
              fill='url(#colorview)'
              animationBegin={800}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
