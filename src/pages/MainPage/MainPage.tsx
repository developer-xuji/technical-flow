import react from "react";
import TaskFlow from '@/pages/TaskFlow';
import TableTitle from '@/components/TableTitle';
import { titleData } from "@/assets/data";
import {TRAIN_DIRECTION, RAILWAY, TRACTION} from "@/constants";
import './MainPage.scss';

const MainPage: React.FC = () =>{
  return (
    <div className="Wrapper">
      <div className='Container'>
        <TableTitle titleData={titleData[TRAIN_DIRECTION]}/>
        <TaskFlow />
      </div>
      <div className='Container'>
        <TableTitle titleData={titleData[RAILWAY]}/>
        <TaskFlow />
      </div>
      <div className='Container'>
        <TableTitle titleData={titleData[TRACTION]}/>
        <TaskFlow />
      </div>
    </div>
    
  )
}

export default MainPage;