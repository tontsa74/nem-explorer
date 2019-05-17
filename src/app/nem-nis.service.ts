import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { Height } from './interfaces/Chain';
import { Account } from './interfaces/Account';
import { NodeCollection } from './interfaces/Node';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material';

/**
 * Service fetch NEM node with API's
 */
@Injectable({
  providedIn: 'root'
})
export class NemNisService {
  /**
   * Default NEM node url
   */
  url = 'http://san.nem.ninja:7890';

  /**
   * NEM node url syncronization with components
   */
  private nodeUrl = new BehaviorSubject(this.url);
  currentNode = this.nodeUrl.asObservable();

  /**
   * @param http HttpClient
   * @param snackBar Snack bar for error messages to UI
   */
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  /**
   * Changes NEM node to given url
   * @param url NEM node url
   */
  changeNode(url: string) {
    this.nodeUrl.next(url);
  }

  /**
   * Fetch chain height
   * @param callBackFunction for the result
   */
  fetchChainHeight(callBackFunction: (result: Height) => void): void {
    const url = this.nodeUrl.value + '/chain/height';
    this.http.get<Height>(url).subscribe((resp) => {
      callBackFunction(resp);
    }, (onError) => {
      console.log(onError);
      this.openSnackBar(onError.message);
      callBackFunction(onError);
    });
  }

  /**
   * Fetch blocks
   * @param height Chain height of first block
   * @param amount Amount of blocks
   * @param callBackFunction for the result
   */
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
    }, (onError) => {
      console.log(onError);
      this.openSnackBar(onError.message);
      callBackFunction(onError);
    });
  }

  /**
   * Fetch account details
   * @param address address of account
   * @param callBackFunction for the result
   */
  fetchAccount(address, callBackFunction: (result: Account) => void): void {
    const url = this.nodeUrl.value + '/account/get?address=';
    this.http.get<Account>(url + address).subscribe((resp) => {
      callBackFunction(resp);
    }, (onError) => {
      console.log(onError);
      this.openSnackBar(onError.message);
      callBackFunction(onError);
    });
  }

  /**
   * Fetch NEM nodes
   * @param callBackFunction for the result
   */
  fetchNodes(callBackFunction: (result: NodeCollection) => void): void {
    const url = this.nodeUrl.value + '/node/peer-list/reachable';
    this.http.get<NodeCollection>(url).subscribe(resp => {
      callBackFunction(resp);
    }, (onError) => {
      console.log(onError);
      this.openSnackBar(onError.message);
      callBackFunction(onError);
    });
  }

  /**
   * Displays message to UI
   * @param message message to display
   */
  openSnackBar(message: string) {
    this.snackBar.open(message, 'dismiss', { duration: 5000 });
  }
}
