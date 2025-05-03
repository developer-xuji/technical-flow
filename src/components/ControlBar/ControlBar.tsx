import DisplayBoard from "@/components/DisplayBoard";
import TaskBoard from "@/components/TaskBoard";
import "./ControlBar.scss";

const ControlBar: React.FC<{
  showTrainDir: Function;
  showRailWay: Function;
  showTraction: Function;
}> = ({ showTrainDir, showRailWay, showTraction }) => {
  return (
    <div className="ControlBar">
      <DisplayBoard
        showTrainDir={showTrainDir}
        showRailWay={showRailWay}
        showTraction={showTraction}
      />
      <TaskBoard/>
    </div>
  );
};

export default ControlBar;
