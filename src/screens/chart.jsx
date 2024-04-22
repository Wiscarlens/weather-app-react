import '../styles/chart.css'
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
    {
      name: '12 AM',
      uv: 74,
      pv: 35,
    },
    {
      name: '4 AM',
      uv: 70,
      pv: 8,
    },
    {
      name: '8 AM',
      uv: 68,
      pv: 15,
    },
    {
      name: '12 PM',
      uv: 71,
      pv: 1,
    },
    {
      name: '4 PM',
      uv: 75,
      pv: 0,
    },
    {
      name: '8 PM',
      uv: 68,
      pv: 0,
    },
    {
      name: '11 PM',
      uv: 64,
      pv: 0,
    },
  ];

const Chart = () => {
    return (
      <div className='chartcontainer'>
        <ResponsiveContainer width="100%" height="100%" >
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 50,
              left: 20,
              bottom: 5,
            }}>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
            <ReferenceLine y={9800} label="Max" stroke="red" />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
        
    )
}

export default Chart;