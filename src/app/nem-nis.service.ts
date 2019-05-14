import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from './interfaces/ExplorerBlockViewModel';
import { Height } from './interfaces/Chain';
import { Account } from './interfaces/Account';
import { Node, NodeCollection } from './interfaces/Node';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {
  // url = 'http://explorer-nem.northeurope.cloudapp.azure.com:3000';
  url = 'http://localhost:7890';

  constructor(private http: HttpClient) { }

  fetchChainHeight(callBackFunction: (result: Height) => void): void {
    const url = this.url + '/chain/height';
    this.http.get<Height>(url).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchLastBlock(callBackFunction: (result: Block) => void): void {
    const url = this.url + '/chain/last-block';
    this.http.get<Block>(url).subscribe(resp => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchBlocksAfter(height: Height, callBackFunction: (result: ExplorerBlockViewModelData[]) => void): void {
    const url = this.url + '/local/chain/blocks-after';
    this.http.post<ExplorerBlockViewModel>(url, height).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp.data.reverse());
    });
  }

  fetchAccount(address, callBackFunction: (result: Account) => void): void {
    const url = this.url + '/account/get?address=';
    this.http.get<Account>(url + address).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchNodes(callBackFunction: (result: NodeCollection) => void): void {
    const url = this.url + '/node/peer-list/reachable';
    this.http.get<NodeCollection>(url).subscribe(resp => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  test() {
    console.log('test');
  }
}
