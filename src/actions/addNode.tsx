import { Graph } from "@antv/x6";

export type NodeInfo = {
  shape?: string,
  x?: number,
  y?: number,
  label: string,
  ports: any,
}

const addNode = (graph: Graph, nodeInfo: NodeInfo) => {
  return graph.addNode({
    shape: nodeInfo.shape,
    x: nodeInfo.x,
    y: nodeInfo.y,
    label: nodeInfo.label,
    ports: nodeInfo.ports,
  });
}

export default addNode;