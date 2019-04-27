import { Transaction } from './Transaction';

export interface ExplorerTransferViewModel {
  tx: Transaction;
  hash: string;
  innerHash: string;
}
