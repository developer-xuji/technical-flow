import { useState, useEffect, useRef } from "react";
import TaskFlow from "@/pages/TaskFlow";
import TableTitle from "@/components/TableTitle";
import TimeLine from "@/components/TimeLine";
import ControlBar from "@/components/ControlBar";
import { titleData } from "@/assets/data";
import { TRAIN_DIRECTION, RAILWAY, TRACTION } from "@/constants";
import "./MainPage.scss";

const MainPage: React.FC = () => {
  const [showTrainIO, setShowTrainDir] = useState<boolean>(true);
  const [showRailway, setShowRailway] = useState<boolean>(true);
  const [showTraction, setShowTraction] = useState<boolean>(true);

  const [trainIOTasks, setTrainIOTasks] = useState<Array<any>>([]);
  const [railwayTasks, setRailwayTasks] = useState<Array<any>>([]);
  const [tractionTasks, setTractionTasks] = useState<Array<any>>([]);

  const dataFetchedRef = useRef(false);

  useEffect(()=>{
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    trainIOTasks.push({
      trainNo:'40082',
      enteringTime:'7:52',
      finishingTime:'8:10',
      notes:'s/17\n1/4\n3/2',
    });
    railwayTasks.push({
      trainNo:'40082',
      enteringTime:'8:10',
      finishingTime:'9:03',
      railwayIndex: 3,
    });
    setTrainIOTasks(trainIOTasks);
    
  },[]);

  return (
    <div className="Wrapper">
      <ControlBar
        showTrainDir={setShowTrainDir}
        showRailWay={setShowRailway}
        showTraction={setShowTraction}
      />
      <div className="TimeLineDiv">
        <TimeLine shift="day" />
      </div>
      <div className="Gap"></div>

      {showTrainIO && (
        <div className="Container">
          <TableTitle titleData={titleData[TRAIN_DIRECTION]} />
          <TaskFlow trainIOTasks={trainIOTasks}/>
        </div>
      )}

      {showRailway && (
        <div className="Container">
          <TableTitle titleData={titleData[RAILWAY]} />
          <TaskFlow railwayTasks={railwayTasks}/>
        </div>
      )}
      {showTraction && (
        <div className="Container">
          <TableTitle titleData={titleData[TRACTION]} />
          <TaskFlow />
        </div>
      )}
    </div>
  );
};

export default MainPage;
