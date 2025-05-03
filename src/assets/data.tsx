import {TRAIN_COLOR, RAILWAY_COLOR, TRACTION_COLOR} from "@/constants";

export const nodes: Array<any> = [
  {
    shape: "custom-node-width-port",
    x: 1150,
    y: 0,
    label: "40082",
    ports: {
      items: [
        {
          id: "port_0",
          group: "center",
        },
      ],
    },
  },
  {
    shape: "custom-node-width-port",
    x: 1250,
    y: 100,
    label: "40082",
    ports: {
      items: [
        {
          id: "port_1",
          group: "center",
        },
      ],
    },
  },
  {
    shape: "custom-node-width-port",
    x: 1250,
    y: 410,
    label: "s/17\n1/4\n3/2",
    ports: {
      items: [
        {
          id: "port_2",
          group: "center",
        },
      ],
    },
  },
  {
    shape: "custom-node-width-port",
    x: 1250,
    y: 1450,
    label: "40082",
    ports: {
      items: [
        {
          id: "port_3",
          group: "center",
        },
      ],
    },
  },
  {
    shape: "custom-node-width-port",
    x: 1450,
    y: 1450,
    label: "40082",
    ports: {
      items: [
        {
          id: "port_4",
          group: "center",
        },
      ],
    },
  },
  {
    shape: "custom-node-width-port",
    x: 1450,
    y: 1750,
    label: "40082",
    ports: {
      items: [
        {
          id: "port_5",
          group: "center",
        },
      ],
    },
  },
];

export const edges: Array<any> = [
  {
    source: { cell: 0, port: "port_c" },
    target: { cell: 1, port: "port_d" },
    attrs: {
      line: {
        stroke: "blue",
        strokeWidth: 1,
      },
    },
  },
];



interface Title {
  color: string,
  key: string,
  name: string,
  subName: any,
}

export const titleData: Array<Array<Title>> = [
  [
    { color: TRAIN_COLOR, key: "1", name: "列车到达", subName: "清河站方向" },
    { color: TRAIN_COLOR, key: "2", name: "列车到达", subName: "于家庄方向" },
    { color: TRAIN_COLOR, key: "3", name: "列车始发", subName: "清河站方向" },
    { color: TRAIN_COLOR, key: "4", name: "列车始发", subName: "于家庄方向" },
    { color: TRAIN_COLOR, key: "5", name: "编组内容", subName: "" },
  ],
  [
    { color: RAILWAY_COLOR, key: "6", name: "到发线", subName: 14 },
    { color: RAILWAY_COLOR, key: "7", name: "到发线", subName: 12 },
    { color: RAILWAY_COLOR, key: "8", name: "到发线", subName: 10 },
    { color: RAILWAY_COLOR, key: "9", name: "到发线", subName: 8 },
    { color: RAILWAY_COLOR, key: "10", name: "到发线", subName: 6 },
    { color: RAILWAY_COLOR, key: "11", name: "到发线", subName: 4 },
    { color: RAILWAY_COLOR, key: "12", name: "到发线", subName: 3 },
    { color: RAILWAY_COLOR, key: "13", name: "到发线", subName: 5 },
    { color: RAILWAY_COLOR, key: "14", name: "到发线", subName: 7 },
    { color: RAILWAY_COLOR, key: "15", name: "到发线", subName: 9 },
    { color: RAILWAY_COLOR, key: "16", name: "到发线", subName: 11 },
  ],
  [
    {
      color: TRACTION_COLOR,
      key: "17",
      name: "牵出线（驼峰）",
      subName: "计划",
    },
    {
      color: TRACTION_COLOR,
      key: "18",
      name: "牵出线（驼峰）",
      subName: "实际",
    },
    { color: TRACTION_COLOR, key: "19", name: "北牵出线", subName: "计划" },
    { color: TRACTION_COLOR, key: "20", name: "北牵出线", subName: "实际" },
  ],
];
