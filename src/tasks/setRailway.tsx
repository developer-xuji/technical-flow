import { Graph, Node } from "@antv/x6";
import addNode from "@/actions/addNode";
import addEdge from "@/actions/addEdge";
import timeToCoordinate from "@/utils/timeToCoordinate";
import { NODE_SHAPE } from "@/constants";
import { RAILWAY_GRAPH_HEIGHT } from "@/assets/data";

const setRailway = (graph: Graph, trainNo:string, enteringTime:string, finishingTime:string, railwayIndex:number) => {
  const enterX = timeToCoordinate(enteringTime);
  const enterY = 100* railwayIndex + 50;
  const finishX = timeToCoordinate(finishingTime);
  const finishY = enterY;
  //进入轨道时间点
  const enterNode = graph.addNode({
    shape:NODE_SHAPE,
    x: enterX,
    y: enterY,
    label: trainNo,
    ports: {
        items: [
          {
            id: "enter",
            group: "center",
          },
        ],
      },
  });

  //离开轨道时间点
  const finishNode = graph.addNode({
    shape:NODE_SHAPE,
    x: finishX,
    y: finishY,
    label: trainNo,
    ports: {
        items: [
          {
            id: "enter",
            group: "center",
          },
        ],
      },
  });

  //连接上个画布节点
  const connectTopNode = graph.addNode({
    shape:NODE_SHAPE,
    x: enterX,
    y: 0,
    label: trainNo,
    ports: {
        items: [
          {
            id: "enter",
            group: "empty",
          },
        ],
      },
  });

  //连接下个画布节点
  const connectBottomNode = graph.addNode({
    shape:NODE_SHAPE,
    x: finishX,
    y: RAILWAY_GRAPH_HEIGHT,
    label: trainNo,
    ports: {
        items: [
          {
            id: "enter",
            group: "empty",
          },
        ],
      },
  });

  graph.addEdge({
    source: { cell: connectTopNode, port: connectTopNode.getPorts()[0].id },
    target: { cell: enterNode, port: enterNode.getPorts()[0].id },
    attrs: {
        line: {
        stroke: "blue",
        strokeWidth: 1,
        targetMarker: null,
        },
    },
  });

  graph.addEdge({
    source: { cell: enterNode, port: enterNode.getPorts()[0].id },
    target: { cell: finishNode, port: finishNode.getPorts()[0].id },
    attrs: {
        line: {
        stroke: "blue",
        strokeWidth: 1,
        targetMarker: null,
        },
    },
  });

  graph.addEdge({
    source: { cell: finishNode, port: finishNode.getPorts()[0].id },
    target: { cell: connectBottomNode, port: connectBottomNode.getPorts()[0].id },
    attrs: {
        line: {
        stroke: "blue",
        strokeWidth: 1,
        targetMarker: null,
        },
    },
  });
}

export default setRailway;