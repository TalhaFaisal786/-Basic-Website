import React from 'react';
import "./chart.css";
import chartBar from "./ChartBar";

function chart(props) {
  return (
    <div className='chart'>
    {props.datapoints.map((datapoint)=>{
      <chartBar 
       key={dataPoint.label}
       value={dataPoint.value}
       maxvalue={null}
       label={dataPoint.label} 
      />
    })}    

    </div>
  )
}

export default chart
