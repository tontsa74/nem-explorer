import { Transaction } from './Transaction';

export interface Block {
  timeStamp: number;
  signature: string;
  prevBlockHash: Data;
  type: number;
  transactions: Transaction[];
  version: number;
  signer: string;
  height: number;
}

interface Data {
  data: string;
}
