import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from './interfaces/ExplorerBlockViewModel';
import { Height } from './interfaces/Chain';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {

  constructor(private http: HttpClient) { }

  fetchChainHeight(callBackFunction: (result: Height) => void): void {
    const url = 'http://localhost:7890/chain/height';
    this.http.get<Height>(url).subscribe((resp) => {
      console.log(resp);
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

  fetchBlocksAfter(height: Height, callBackFunction: (result: ExplorerBlockViewModelData[]) => void): void {
    const url = 'http://localhost:7890/local/chain/blocks-after';
    this.http.post<ExplorerBlockViewModel>(url, height).subscribe((resp) => {
      console.log(resp.data);
      callBackFunction(resp.data.reverse());
    });
  }

  // fetchBlocks(from: number, to: number, callBackFunction: (result: ExplorerBlockViewModelData[]) => void): void {
  //   const url = 'http://localhost:7890/local/chain/blocks-after';
  //   let data: ExplorerBlockViewModelData[] = [];
  //   for (from; from > to; from -= 10) {
  //     const height: Height = { height: from - 10 };
  //     this.fetchBlocksAfter(height, (result) => {
  //       if (data.length === 0) {
  //         data = result;
  //       } else {
  //         result.forEach((x) => data.push(x));
  //       }
  //       console.log(data);
  //       console.log(height);
  //       height.height -= 10;
  //       console.log(height.height + ' - ' + to);
  //       // const data: ExplorerBlockViewModelData[] = resp.data;
  //       console.log(data);
  //       callBackFunction(data);
  //     });
  //   }
  // }

  test() {
    console.log('test');
  }
}
