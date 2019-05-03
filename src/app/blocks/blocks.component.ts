import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { ExplorerBlockViewModel, ExplorerBlockViewModelData } from '../interfaces/ExplorerBlockViewModel';
import { NemNisService } from '../nem-nis.service';
import { Height } from '../interfaces/Chain';
import { Block } from '../interfaces/Block';
import { MatDialog, MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { Transaction } from '../interfaces/Transaction';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  blocks: ExplorerBlockViewModelData[] = [];
  chainHeight: Height;
  firstHeight: number;
  lastHeight: number;
  blockSelected: Block;
  transactions: Transaction[] = [];

  displayedColumns: string[] = ['height', 'signer', 'timeStamp', 'txes'];
  dataSource = new MatTableDataSource<ExplorerBlockViewModelData>(this.blocks);
  pageSizeOptions: number[] = [5, 10];
  // MatPaginator Output
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private nemnis: NemNisService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this.nemnis.fetchChainHeight((resp) => {
      this.chainHeight = resp;

      if (this.blocks.length === 0) {
        this.fetchBlocksAfter(resp.height);
      }
    });
  }

  // fetch 10 blocks
  fetchBlocksAfter(height): void {
    const fetchHeight = {height: height - 10};
    this.nemnis.fetchBlocksAfter(fetchHeight, (response) => {
      const data: ExplorerBlockViewModelData[] = response;
      response.forEach((x) => this.blocks.push(x));
      // this.blocks = response;
      this.lastHeight = this.blocks[0].block.height;
      this.firstHeight = this.blocks[this.blocks.length - 1].block.height;
      console.log('height: ' + this.firstHeight + ' - ' + this.lastHeight);
      this.dataSource.data = this.blocks;
    });
  }

  blockClicked(block: Block): void {
    this.blockSelected = block;
    this.transactions = block.transactions;
  }

  fetchBlocks(pageEvent: PageEvent) {
    console.log(pageEvent);
    const first = pageEvent.pageIndex * pageEvent.pageSize;
    let last = first + pageEvent.pageSize * 2 - 1;
    console.log(first + ' - ' + last);

    if (last > pageEvent.length) {
      const from: number = this.firstHeight - 1;
      const to: number = from - last;
      console.log(from + ' - ' + to);
      this.fetchBlocksAfter(from);

      // this.nemnis.fetchBlocks(from, to, (response) => {
      //   const data: ExplorerBlockViewModelData[] = response;
      //   response.forEach((x) => this.blocks.push(x));
      //   // this.blocks = response;
      //   this.lastHeight = this.blocks[0].block.height;
      //   this.firstHeight = this.blocks[this.blocks.length - 1].block.height;
      //   console.log('height: ' + this.firstHeight + ' - ' + this.lastHeight);
      //   this.dataSource.data = this.blocks;
      // });
    }
  }
}
