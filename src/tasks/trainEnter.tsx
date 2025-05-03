import { Graph, Node } from "@antv/x6";
import addNode from "@/actions/addNode";
import addEdge from "@/actions/addEdge";
import timeToCoordinate from "@/utils/timeToCoordinate";
import { NODE_SHAPE } from "@/constants";
import { TRAIN_GRAPH_HEIGHT } from "@/assets/data";

const trainEnter = (graph: Graph, trainNo:string, enteringTime:string, finishingTime:string, notes:string) => {
  const enterX = timeToCoordinate(enteringTime);
  const enterY = 0;
  const finishX = timeToCoordinate(finishingTime);
  const finishY = 100;

  //列车驶入时间点
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

  //列车完成驶入时间点
  const finishedNode = graph.addNode({
    shape:NODE_SHAPE,
    x: finishX,
    y: finishY,
    label: trainNo,
    ports: {
        items: [
          {
            id: "finish",
            group: "center",
          },
        ],
      },
  });

  //编组内容节点
  const notesNode = graph.addNode({
    shape:NODE_SHAPE,
    x: finishX,
    y: 420,
    label: notes,
    ports: {
        items: [
          {
            id: "notes",
            group: "center",
          },
        ],
      },
  });
  //和下一个画布的连接节点
  const connectNode = graph.addNode({
    shape:NODE_SHAPE,
    x: finishX,
    y: TRAIN_GRAPH_HEIGHT,
    label: "",
    ports: {
      items: [
        {
          id: "notes",
          group: "empty",
        },
      ],
    },
  });


  graph.addEdge({
    source: { cell: enterNode, port: enterNode.getPorts()[0].id },
    target: { cell: finishedNode, port: finishedNode.getPorts()[0].id },
    attrs: {
        line: {
        stroke: "blue",
        strokeWidth: 1,
        targetMarker: null,
        },
    },
  });
  graph.addEdge({
    source: { cell: finishedNode, port: finishedNode.getPorts()[0].id },
    target: { cell: notesNode, port: notesNode.getPorts()[0].id },
    attrs: {
        line: {
        stroke: "blue",
        strokeWidth: 1,
        targetMarker: null,
        },
    },
  });
  graph.addEdge({
    source: { cell: notesNode, port: notesNode.getPorts()[0].id },
    target: { cell: connectNode, port: connectNode.getPorts()[0].id },
    attrs: {
        line: {
        stroke: "blue",
        strokeWidth: 1,
        targetMarker: null,
        },
    },
  });

}

export default trainEnter;