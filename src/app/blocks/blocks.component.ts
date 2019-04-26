import { Component, OnInit, OnChanges } from '@angular/core';
import { Block } from '../interfaces/Block';
import { NemNisService } from '../nem-nis.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  displayedColumns: string[] = ['height', 'timeStamp', 'prevBlockHash'];
  blocks: Block[] = [];

  constructor(private nemnis: NemNisService) { }

  ngOnInit(): void {

    this.nemnis.fetchLastBlock((res) => {
      console.log(res);
      const temp: Block[] = [];
      temp.push(res);
      this.blocks = temp;
      this.nemnis.test();
    });

    // this.http.post('http://localhost:7890/local/chain/blocks-after', {height: 1000000}).subscribe((resp) => {
    //   console.log(resp);
    // });
  }
}
