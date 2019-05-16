import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { Height } from './interfaces/Chain';
import { Account } from './interfaces/Account';
import { NodeCollection } from './interfaces/Node';
import { BehaviorSubject, Subject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {
  url = 'http://san.nem.ninja:7890';

  urlChange: Subject<string> = new Subject<string>();

  private nodeUrl = new BehaviorSubject(this.url);
  currentNode = this.nodeUrl.asObservable();

  constructor(private http: HttpClient) { }

  changeNode(url: string) {
    this.nodeUrl.next(url);
  }

  fetchChainHeight(callBackFunction: (result: Height) => void): void {
    const url = this.nodeUrl.value + '/chain/height';
    this.http.get<Height>(url).subscribe((resp) => {
      callBackFunction(resp);
    });
  }

  fetchBlocksPublic(height: Height, amount: number, callBackFunction: (result: Block[]) => void): void {
    const url = this.nodeUrl.value + '/block/at/public';
    const heights: Height[] = [];
    for (let i = amount - 1; i >= 0; i--) {
      const h: number = height.height - i;
      if (h > 0) {
        heights.push({height: h});
      }
    }
    forkJoin(
      heights.map(
        i => this.http.post<Block>(url, i)
      )
    ).subscribe((resp) => {
        callBackFunction(resp.reverse());
    });
  }

  fetchAccount(address, callBackFunction: (result: Account) => void): void {
    const url = this.nodeUrl.value + '/account/get?address=';
    this.http.get<Account>(url + address).subscribe((resp) => {
      callBackFunction(resp);
    });
  }

  fetchNodes(callBackFunction: (result: NodeCollection) => void): void {
    const url = this.nodeUrl.value + '/node/peer-list/reachable';
    this.http.get<NodeCollection>(url).subscribe(resp => {
      callBackFunction(resp);
    });
  }
}
