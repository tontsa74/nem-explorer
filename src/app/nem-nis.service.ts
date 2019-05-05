import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from './interfaces/ExplorerBlockViewModel';
import { Height } from './interfaces/Chain';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {
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

  test() {
    console.log('test');
    this.http.get('http://localhost:3000/employees/0').subscribe((resp) => {
      console.log(resp);
    });
  }
}
