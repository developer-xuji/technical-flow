import { Button } from 'antd';
import './TaskBoard.scss'

const TRAIN_IO = '进/出站';
const RAILWAY = '进股道';
const DISINTEGRATION = '解体';
const TRACKING = '牵引';
const REUNION = "重组";

const TaskBoard:React.FC = () => {
  return(
    <div className='TaskBoard'>
      <Button>{TRAIN_IO}</Button>
      <Button>{RAILWAY}</Button>
      <Button>{DISINTEGRATION}</Button>
      <Button>{TRACKING}</Button>
      <Button>{REUNION}</Button>
    </div>
  )
}

export default TaskBoard;