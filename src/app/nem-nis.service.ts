import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { ExplorerBlockViewModel } from './interfaces/ExplorerBlockViewModel';
import { Height } from './interfaces/Chain';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {

  constructor(private http: HttpClient) { }

  fetchChainHeight(callBackFunction: (result: Height) => void): void {
    const url = 'http://localhost:7890/chain/height';
    this.http.get<Height>(url).subscribe((resp) => {
      console.log('Height: ' + resp);
      callBackFunction(resp);
    });
  }

  fetchLastBlock(callBackFunction: (result: Block) => void): void {
    const url = 'http://localhost:7890/chain/last-block';
    this.http.get<Block>(url).subscribe(resp => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  fetchBlocksAfter(height: Height, callBackFunction: (result: ExplorerBlockViewModel) => void): void {
    const url = 'http://localhost:7890/local/chain/blocks-after';
    this.http.post<ExplorerBlockViewModel>(url, height).subscribe((resp) => {
      console.log(resp);
      callBackFunction(resp);
    });
  }

  test() {
    console.log('test');
  }
}
