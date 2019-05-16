import { Component, OnInit, ViewChild } from '@angular/core';
import { NemNisService } from '../nem-nis.service';
import { Height } from '../interfaces/Chain';
import { Block } from '../interfaces/Block';
import { MatTableDataSource, MatPaginator, PageEvent, MatSnackBar } from '@angular/material';
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
  loading: boolean;

  // MatPaginator Output
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private nemnis: NemNisService) {
    this.loading = true;
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initBlocks();
  }

  initBlocks() {
    this.loading = true;
    this.nemnis.fetchChainHeight((resp) => {
      this.chainHeight = resp;

      if (resp.height > 0 && this.blocks.length === 0) {
        this.fetchBlocksPublic(resp.height, 10);
      }

      this.loading = false;
    });
  }

  // fetch blocks
  fetchBlocksPublic(height: number, amount: number): void {
    this.loading = true;
    const fetchHeight: Height = {height};
    this.nemnis.fetchBlocksPublic(fetchHeight, amount, (response) => {
      if (response[0].height) {
        response.forEach((x) => this.blocks.push(x));
        this.dataSource.data = this.blocks;
        this.loading = false;
      }
    });
  }

  blockClicked(block: Block): void {
    this.blockSelected = block;
    this.transactions = block.transactions;
  }

  fetchBlocks(pageEvent: PageEvent) {
    const first = pageEvent.pageIndex * pageEvent.pageSize;
    const last = first + pageEvent.pageSize * 2 - 1;

    if (last > pageEvent.length && this.blocks.length > 0) {
      const height: number = this.blocks[this.blocks.length - 1].height - 1;
      this.fetchBlocksPublic(height, pageEvent.pageSize);
    }
  }
}
