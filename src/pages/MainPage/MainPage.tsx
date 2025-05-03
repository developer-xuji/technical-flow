import { useState, useEffect } from "react";
import TaskFlow from "@/pages/TaskFlow";
import TableTitle from "@/components/TableTitle";
import TimeLine from "@/components/TimeLine";
import ControlBar from "@/components/ControlBar";
import { titleData } from "@/assets/data";
import { TRAIN_DIRECTION, RAILWAY, TRACTION } from "@/constants";
import "./MainPage.scss";

const MainPage: React.FC = () => {
  const [showTrainDir, setShowTrainDir] = useState<boolean>(true);
  const [showRailway, setShowRailway] = useState<boolean>(true);
  const [showTraction, setShowTraction] = useState<boolean>(true);

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
      {showTrainDir && (
        <div className="Container">
          <TableTitle titleData={titleData[TRAIN_DIRECTION]} />
          <TaskFlow />
        </div>
      )}

      {showRailway && (
        <div className="Container">
          <TableTitle titleData={titleData[RAILWAY]} />
          <TaskFlow />
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
