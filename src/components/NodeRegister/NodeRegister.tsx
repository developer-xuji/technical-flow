import React from "react";
import { Graph } from "@antv/x6";
import { NODE_SHAPE } from "@/constants";

const NodeRegister = () => {
  return Graph.registerNode(
    NODE_SHAPE,
    {
      inherit: "rect",
      width: 50,
      height: 40,
      attrs: {
        body: {
          stroke: "#8f8f8f0",
          strokeWidth: 0,
          fill: "#fff0",
          rx: 6,
          ry: 6,
        },
      },
      ports: {
        groups: {
          center: {
            position: "absolute",
            attrs: {
              circle: {
                magnet: true,
                stroke: "#8f8f8f",
                r: 5,
              },
            },
          },
          empty: {
            position: "absolute",
            attrs: {
              circle: {
                magnet: true,
                stroke: "#8f8f8f0",
                r: 0,
              },
            },
          },
        },
      },
    },
    true
  );
}

export default NodeRegister;