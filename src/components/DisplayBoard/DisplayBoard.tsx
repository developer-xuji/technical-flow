import { useState } from "react";
import { Checkbox } from "antd";
import './DisplayBoard.scss'

const CheckboxGroup = Checkbox.Group;
const TRAINDIR = '列车进/出站';
const RAILWAY = "股道";
const TRACTION = "牵出线";
const GROUND = "场内";

const DisplayBoard: React.FC<{
  showTrainDir: Function;
  showRailWay: Function;
  showTraction: Function;
}> = ({ showTrainDir, showRailWay, showTraction }) => {
  const plainOptions = [TRAINDIR, RAILWAY, TRACTION, GROUND];
  const [checkedList, setCheckedList] = useState<Array<string>>(plainOptions);

  const onChange = (checkedList: Array<any>) => {
    setCheckedList(checkedList);
    checkedList.includes(TRAINDIR) ? showTrainDir(true) : showTrainDir(false);
    checkedList.includes(RAILWAY) ? showRailWay(true) : showRailWay(false);
    checkedList.includes(TRACTION) ? showTraction(true) : showTraction(false);
  };

  return (
    <div className="DisplayBoard">
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  );
};

export default DisplayBoard;
