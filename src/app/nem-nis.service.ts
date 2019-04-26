import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Block } from './interfaces/Block';

@Injectable({
  providedIn: 'root'
})
export class NemNisService {

  constructor(private http: HttpClient) { }

  fetchLastBlock(callBackFunction: (result: Block) => void): void {
    const url = 'http://localhost:7890/chain/last-block';
    this.http.get<Block>(url).subscribe(response => {
      console.log(response);
      callBackFunction(response);
    });
  }

  test() {
    console.log('test');
  }
}
