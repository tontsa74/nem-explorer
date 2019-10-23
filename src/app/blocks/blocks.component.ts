import { Component, OnInit, ViewChild } from '@angular/core';
import { NemNisService } from '../nem-nis.service';
import { Height } from '../interfaces/Chain';
import { Block } from '../interfaces/Block';
import { MatTableDataSource, MatPaginator, PageEvent } from '@angular/material';
import { Transaction } from '../interfaces/Transaction';

/**
 * Displays NEM blocks.
 */
@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  /**
   * NEM blocks
   */
  blocks: Block[] = [];

  /**
   * NEM blockchain current height.
   */
  chainHeight: Height;

  /**
   * NEM block selected.
   */
  blockSelected: Block;

  /**
   * NEM transactions in selected block
   */
  transactions: Transaction[] = [];

  /**
   * Table columns to display.
   */
  displayedColumns: string[] = ['height', 'signer', 'timeStamp', 'txes'];
  
  /**
   * Data source of displayed table.
   */
  dataSource = new MatTableDataSource<Block>(this.blocks);

  /**
   * Page size options for table.
   */
  pageSizeOptions: number[] = [5, 10];

  /**
   * Loading state of data
   */
  loading: boolean;

  /**
   * Table paginator output event.
   */
  pageEvent: PageEvent;

  /**
   * Paginator of table.
   */
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /**
   * 
   * @param nemnis Service to fetch data.
   */
  constructor(private nemnis: NemNisService) { }

  /**
   * Init and fetch blocks.
   */
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.initBlocks();
  }

  /**
   * Fetch NEM blockchain current height and fetch blocks.
   */
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

  /**
   * Fetch blocks from service to table
   * @param height height of first block
   * @param amount amount of blocks
   */
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

  /**
   * Sets selected block and tracactions.
   * @param block NEM block
   */
  blockClicked(block: Block): void {
    this.blockSelected = block;
    this.transactions = block.transactions;
  }

  /**
   * Fetch more blocks to browse if needed.
   * @param pageEvent Paginator event
   */
  fetchBlocks(pageEvent: PageEvent) {
    const first = pageEvent.pageIndex * pageEvent.pageSize;
    const last = first + pageEvent.pageSize * 2 - 1;

    if (last > pageEvent.length && this.blocks.length > 0) {
      const height: number = this.blocks[this.blocks.length - 1].height - 1;
      this.fetchBlocksPublic(height, pageEvent.pageSize);
    }
  }
}
