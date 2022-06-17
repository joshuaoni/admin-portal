import React from 'react'; 
import { BsThreeDots } from "react-icons/bs";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

export default function TargetAudeince() {
  const data = [
    {
      uv: 4000,
    },
    {
      uv: 3000,
    },
    {
      uv: 2000,
    },
    {
      uv: 2780,
    },
    {
      uv: 1890,
    },
    {
      uv: 2390,
    },
    {
      uv: 3490,
    },
  ];
  return (
    <div className='target-audience card-style'>
      <div className="title-cont">
        <div className="title">
          <h4>Target Audience</h4>
          <BsThreeDots />
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart  data={data}>
            <Tooltip cursor={{ fill: "#1c174c7a" }} />
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="40%"
                  stopColor="#1c174c"
                  stopOpacity={0.8}
                />
                <stop offset="80%" stopColor="#000000ff" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="uv"
              stackId="a"
              fill="url(#colorview)"
              animationBegin={800}
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

