import { Component, OnInit, OnChanges } from '@angular/core';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from '../interfaces/ExplorerBlockViewModel';
import { NemNisService } from '../nem-nis.service';
import { Height } from '../interfaces/Chain';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  displayedColumns: string[] = ['height', 'timeStamp', 'txes'];
  blocks: ExplorerBlockViewModelData[] = [];
  chainHeight: Height;

  constructor(private nemnis: NemNisService) { }

  ngOnInit(): void {

    this.nemnis.fetchChainHeight((resp) => {
      this.chainHeight = resp;

      this.fetchBlocksAfter(resp.height);
    });
  }

  // fetch 10 blocks
  fetchBlocksAfter(height) {
    const fetchHeight = {height: height - 10};
    this.nemnis.fetchBlocksAfter(fetchHeight, (response) => {
      this.blocks = response.data;
    });
  }
}
