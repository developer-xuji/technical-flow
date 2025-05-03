import React, { useEffect } from "react";
import { Graph } from "@antv/x6";
import NodeRegister from "@/components/NodeRegister";
import TaskGraph from "@/components/TaskGraph";
import { nodes } from "@/assets/data";
import trainEnter from "@/tasks/trainEnter";
import setRailway from "@/tasks/setRailway";

interface TaskFlowProps {
  trainIOTasks?: Array<any>;
  railwayTasks?: Array<any>;
  tractionTasks?: Array<any>;
}

const TaskFlow: React.FC<TaskFlowProps> = (props) => {
  NodeRegister();
  let container: HTMLDivElement;

  const { trainIOTasks, railwayTasks, tractionTasks } = props;

  useEffect(() => {
    const graph = TaskGraph(container);

    trainIOTasks?.forEach((t) => {
      trainEnter(graph, t.trainNo, t.enteringTime, t.finishingTime, t.notes);
    });

    railwayTasks?.forEach((t) => {
      setRailway(graph, t.trainNo, t.enteringTime, t.finishingTime, t.railwayIndex);
    });

    /*
    nodes.forEach((n) => {
      graphNodes.push(graph.addNode({
        shape:n.shape,
        x:n.x,
        y: n.y,
        label: n.label,
        ports: n.ports,
      }));
    });

    graph.addEdge({
      source: { cell: graphNodes[0], port: nodes[0].ports.items[0].id },
      target: { cell: graphNodes[1], port: nodes[1].ports.items[0].id },
      attrs: {
        line: {
          stroke: "blue",
          strokeWidth: 1,
          targetMarker: null,
        },
      },
    });
    graph.addEdge({
      source: { cell: graphNodes[1], port: nodes[1].ports.items[0].id },
      target: { cell:graphNodes[2], port: nodes[2].ports.items[0].id },
      attrs: {
        line: {
          stroke: "blue",
          strokeWidth: 1,
          targetMarker: null,
        },
      },
    });
    graph.addEdge({
      source: { cell: graphNodes[2], port: nodes[2].ports.items[0].id },
      target: { cell:graphNodes[3], port: nodes[3].ports.items[0].id },
      attrs: {
        line: {
          stroke: "blue",
          strokeWidth: 1,
          targetMarker: null,
        },
      },
    });
    graph.addEdge({
      source: { cell: graphNodes[3], port: nodes[3].ports.items[0].id },
      target: { cell:graphNodes[4], port: nodes[4].ports.items[0].id },
      attrs: {
        line: {
          stroke: "blue",
          strokeWidth: 1,
          targetMarker: null,
        },
      },
    });
    graph.addEdge({
      source: { cell: graphNodes[4], port: nodes[4].ports.items[0].id },
      target: { cell:graphNodes[5], port: nodes[5].ports.items[0].id },
      attrs: {
        line: {
          stroke: "blue",
          strokeWidth: 1,
          targetMarker: null,
        },
      },
    });

    //graph.centerContent();*/
  },[trainIOTasks, railwayTasks, tractionTasks]);
    

  const refContainer = (c: HTMLDivElement) => {
    container = c;
  };

  return (
    <div
      className="Container"
      ref={refContainer}
      style={{ minWidth: "7500px" }}
    ></div>
  );
};

export default TaskFlow;
