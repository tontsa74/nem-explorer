import { Component, OnInit, OnChanges } from '@angular/core';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from '../interfaces/ExplorerBlockViewModel';
import { NemNisService } from '../nem-nis.service';
import { Height } from '../interfaces/Chain';
import { Block } from '../interfaces/Block';
import { MatDialog } from '@angular/material';
import { Transaction } from '../interfaces/Transaction';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  displayedColumns: string[] = ['height', 'timeStamp', 'txes'];
  blocks: ExplorerBlockViewModelData[] = [];
  chainHeight: Height;
  blockSelected: Block;
  transactions: Transaction[] = [];

  constructor(private nemnis: NemNisService) { }

  ngOnInit(): void {

    this.nemnis.fetchChainHeight((resp) => {
      this.chainHeight = resp;

      this.fetchBlocksAfter(resp.height);
    });
  }

  // fetch 10 blocks
  fetchBlocksAfter(height): void {
    const fetchHeight = {height: height - 10};
    this.nemnis.fetchBlocksAfter(fetchHeight, (response) => {
      this.blocks = response.data;
    });
  }

  blockClicked(block: Block): void {
    this.blockSelected = block;
    this.transactions = block.transactions;
  }
}
