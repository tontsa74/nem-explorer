import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from './interfaces/ExplorerBlockViewModel';
import { Height } from './interfaces/Chain';
import { Account } from './interfaces/Account';
import { Node, NodeCollection } from './interfaces/Node';
import { BehaviorSubject, Subject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {
  // url = 'http://explorer-nem.northeurope.cloudapp.azure.com:3000';
  url = 'http://localhost:7890';
  urlChange: Subject<string> = new Subject<string>();

  private nodeUrl = new BehaviorSubject(this.url);
  currentNode = this.nodeUrl.asObservable();

  constructor(private http: HttpClient) { }

  changeNode(url: string) {
    console.log(url);
    this.nodeUrl.next(url);
  }

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

  fetchBlock(height: Height, callBackFunction: (result: Block) => void): void {
    const url = this.nodeUrl.value + '/block/at/public';
    console.log(url);
    this.http.post<Block>(url, height).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchBlocksPublic(height: Height, callBackFunction: (result: Block[]) => void): void {
    const url = this.nodeUrl.value + '/block/at/public';
    const heights: Height[] = [];
    for (let i = 0; i < 10; i++) {
      heights.push({height: height.height + i});
    }

    forkJoin(
      heights.map(
        i => this.http.post<Block>(url, i)
        // .map(res => res.json())
      )
    ).subscribe((resp) => {
        console.log(resp);
        callBackFunction(resp.reverse());
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
}
