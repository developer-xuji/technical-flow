import React from "react";
import { Table } from "antd";
import "./TableTitle.scss";
import { HEADER_WIDTH } from "@/constants";
import {TRAIN_COLOR, RAILWAY_COLOR, TRACTION_COLOR} from "@/constants";

const TableTitle: React.FC<{titleData:Array<any>}> = ({titleData}) => {
  const dataSource:Array<any> = [];

  titleData.forEach((d:any)=>{
    dataSource.push({
      key:d.key,
      name: d.name,
      subName: d.subName,
    })
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "SubName", dataIndex: "subName", key: "subName" },
  ];

  const getRowClassName = (key: number) => {
    const tData = titleData.find((d) => d.key === key);
    switch(tData.color){
      case TRAIN_COLOR:
        return 'trainRow';
      case RAILWAY_COLOR:
        return 'railwayRow';
      case TRACTION_COLOR:
        return 'localStationRow';
      default:
        return '';
    }
  }
  

  return (
    <Table
      className="hiddenHeader"
      dataSource={dataSource}
      columns={columns}
      pagination={{ position: ["none"], pageSize: 500 }}
      style={{ minWidth: `${HEADER_WIDTH}px`, position:'sticky', left:'0', zIndex:'98' }}
      rowClassName={(record,i) => getRowClassName(record.key)+' HighLightText'}
    />
  );
};

export default TableTitle;
