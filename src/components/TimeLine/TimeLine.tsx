import React from "react";
import { Timeline } from "antd";
import {HEADER_WIDTH} from "@/constants";

const TimeLine: React.FC<{shift:string}> = ({shift}) => {
  const dayTimeSlots=[6,7,8,9,10,11,12,13,14,15,16,17,18,25];
  const nightTimeSlots=[18,19,20,21,22,23,0,1,2,3,4,5,6,25];

  const shiftSlots = shift === 'day' ? dayTimeSlots : nightTimeSlots;

  return (
    <Timeline style={{ display: "flex", marginLeft:`${HEADER_WIDTH-4}px`, marginTop:'3cm',maxHeight:"1cm", bottom:'0'}}>
        {shiftSlots.map((t)=>
          <Timeline.Item color={t===25 ? '#fff0' : 'red'} style={{ minWidth: "600px", textAlign:"left" }} >
            {t===25 ? '' : t}
          </Timeline.Item>)}
        
      </Timeline>
    );
}
  

export default TimeLine;
