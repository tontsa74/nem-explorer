import { Block } from './Block';
import { ExplorerTransferViewModel } from './ExplorerTransferViewModel';

export interface ExplorerBlockViewModel {
  data: ExplorerBlockViewModelData[];
}

export interface ExplorerBlockViewModelData {
  txes: ExplorerTransferViewModel[];
  block: Block;
  hash: string;
  difficulty: number;
}
