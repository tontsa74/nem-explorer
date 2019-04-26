import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Block } from '../interfaces/Block';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  blocks: Block[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Block>('http://localhost:7890/chain/last-block').subscribe((resp) => {
      console.log(resp);
      this.blocks.push(resp);
      this.blocks.push(resp);
      this.blocks.push(resp);
      this.blocks.push(resp);
      this.blocks.push(resp);
    });

    this.http.post('http://localhost:7890/local/chain/blocks-after', {height: 1000000}).subscribe((resp) => {
      console.log(resp);
    });
  }

}
