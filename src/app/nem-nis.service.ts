import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from './interfaces/ExplorerBlockViewModel';
import { Height } from './interfaces/Chain';
import { Account } from './interfaces/Account';
import { Node, NodeCollection } from './interfaces/Node';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {
  // url = 'http://explorer-nem.northeurope.cloudapp.azure.com:3000';
  // _url: string;
  _address: string;
  urlChange: Subject<string> = new Subject<string>();

  private nodeUrl = new BehaviorSubject('http://localhost:7890');
  currentNode = this.nodeUrl.asObservable();

  constructor(private http: HttpClient) {
  // this._url = 'http://localhost:7890';
  console.log(this.nodeUrl.value);
  }

  changeNode(url: string) {
    console.log(url);
    this.nodeUrl.next(url);
  }

  set address(address: string) {
    console.log(address);
    this._address = address;
  }

  get address(): string {
    return this._address;
  }

  // set url(url: string) {
  //   this._url = url;
  //   this.urlChange.next(this._url);
  // }

  // get url(): string {
  //   return this._url;
  // }

  fetchChainHeight(callBackFunction: (result: Height) => void): void {
    const url = this.nodeUrl.value + '/chain/height';
    this.http.get<Height>(url).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchLastBlock(callBackFunction: (result: Block) => void): void {
    const url = this.nodeUrl.value + '/chain/last-block';
    this.http.get<Block>(url).subscribe(resp => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchBlocksAfter(height: Height, callBackFunction: (result: ExplorerBlockViewModelData[]) => void): void {
    const url = this.nodeUrl.value + '/local/chain/blocks-after';
    this.http.post<ExplorerBlockViewModel>(url, height).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp.data.reverse());
    });
  }

  fetchAccount(address, callBackFunction: (result: Account) => void): void {
    const url = this.nodeUrl.value + '/account/get?address=';
    this.http.get<Account>(url + address).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchNodes(callBackFunction: (result: NodeCollection) => void): void {
    const url = this.nodeUrl.value + '/node/peer-list/reachable';
    this.http.get<NodeCollection>(url).subscribe(resp => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  test() {
    console.log('test');
  }
}
