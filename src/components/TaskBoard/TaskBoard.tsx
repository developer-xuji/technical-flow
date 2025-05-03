import { Button } from 'antd';

const TaskBoard:React.FC = () => {
  return(
    <div>
      <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Danger</Button>
    <Button type="link">Link</Button>
  </div>
    </div>
  )
}

export default TaskBoard;