export interface NodeCollection {
  inactive?: Node[];
  failure?: Node[];
  busy?: Node[];
  active?: Node[];
  data?: Node[];
}

export interface Node {
  metaData: NodeMetaData;
  endpoint: NodeEndPoint;
  identity: NodeIdentity;
}

interface NodeMetaData {
  features: number;
  application: string;
  networkId: number;
  version: string;
  platform: string;
}

interface NodeEndPoint {
  protocol: string;
  port: number;
  host: string;
}

interface NodeIdentity {
  name: string;
  'public-key': string;
}
