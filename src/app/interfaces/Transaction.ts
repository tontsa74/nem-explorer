export interface Transaction {
  deadline: number;
  fee: number;
  mode: number;
  remoteAccount: string;
  signature: string;
  signer: string;
  timeStamp: number;
  type: number;
  version: number;
  amount: number;
  message: Message;
  recipient: string;
}

export interface Message {
  payload: string;
  type: number;
}
