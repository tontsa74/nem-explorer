import { Component, OnInit, ViewChild } from '@angular/core';
import { ExplorerBlockViewModelData } from '../interfaces/ExplorerBlockViewModel';
import { NemNisService } from '../nem-nis.service';
import { Height } from '../interfaces/Chain';
import { Block } from '../interfaces/Block';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { Transaction } from '../interfaces/Transaction';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  blocks: Block[] = [];
  chainHeight: Height;
  blockSelected: Block;
  transactions: Transaction[] = [];

  displayedColumns: string[] = ['height', 'signer', 'timeStamp', 'txes'];
  dataSource = new MatTableDataSource<Block>(this.blocks);
  pageSizeOptions: number[] = [5, 10];

  // MatPaginator Output
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private nemnis: NemNisService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initBlocks();
  }

  initBlocks() {
    this.nemnis.fetchChainHeight((resp) => {
      this.chainHeight = resp;

      if (this.blocks.length === 0) {
        this.fetchBlocksPublic(resp.height);
      }
    });
  }

  // fetch 10 blocks
  fetchBlocksAfter(height: number): void {
    const fetchHeight = {height: height - 10};
    this.nemnis.fetchBlocksAfter(fetchHeight, (response) => {
      response.forEach((x) => this.blocks.push(x.block));
      this.dataSource.data = this.blocks;
    });
  }

  // fetch 10 blocks
  fetchBlocksPublic(height: number): void {
    const fetchHeight = {height: height - 9};
    this.nemnis.fetchBlocksPublic(fetchHeight, (response) => {
      response.forEach((x) => this.blocks.push(x));
      this.dataSource.data = this.blocks;
    });
  }

  blockClicked(block: Block): void {
    this.blockSelected = block;
    this.transactions = block.transactions;
  }

  fetchBlocks(pageEvent: PageEvent) {
    const first = pageEvent.pageIndex * pageEvent.pageSize;
    const last = first + pageEvent.pageSize * 2 - 1;

    if (last > pageEvent.length) {
      const height: number = this.blocks[this.blocks.length - 1].height - 1;
      this.fetchBlocksPublic(height);
    }
  }
}
