export interface Account {
  account: AccountInfo;
  meta: AccountMetaData;
}

export interface AccountInfo {
  address: string;
  balance: number;
  vestedBalance: number;
  importance: number;
  publicKey: string;
  label: null;
  harvestedBlocks: number;
  multisigInfo: object;
}

interface AccountMetaData {
  status: string;
  remoteStatus: string;
  cosignatoryOf: AccountInfo[];
  cosignatories: AccountInfo[];
}
