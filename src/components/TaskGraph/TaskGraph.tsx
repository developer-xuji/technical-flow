import { Graph } from "@antv/x6";
import {GRID_SIZE} from "@/constants";

const TaskGraph = (container: HTMLElement) => {
  return new Graph({
    container: container,
    background: {
      color: "#F2F7FA",

    },
    grid: {
      size: GRID_SIZE,
      visible: true,
      type: "doubleMesh",
      args: [
        {
          color: "#eee", // 次网格线颜色
          thickness: 1, // 次网格线宽度
        },
        {
          color: "#ddd", // 主网格线颜色
          thickness: 1, // 主网格线宽度
          factor: 10, // 主次网格线间隔
        },
      ],
    },
  });
} 

export default TaskGraph;