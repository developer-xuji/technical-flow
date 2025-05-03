import { Graph, Node } from "@antv/x6";

const addEdge = (graph: Graph, source: Node, target: Node) => {
  return graph.addEdge({
        source: { cell: source, port: source.getPorts()[0].id },
        target: { cell: target, port: target.getPorts()[0].id },
        attrs: {
          line: {
            stroke: "blue",
            strokeWidth: 1,
            targetMarker: null,
          },
        },
      });
}

export default addEdge;