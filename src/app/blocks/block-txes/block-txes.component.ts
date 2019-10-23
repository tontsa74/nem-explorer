import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/interfaces/Block';
import { Transaction } from 'src/app/interfaces/Transaction';
import { TxesDetailsComponent } from './txes-details/txes-details.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * Display transactions in block.
 */
@Component({
  selector: 'app-block-txes',
  templateUrl: './block-txes.component.html',
  styleUrls: ['./block-txes.component.css']
})
export class BlockTxesComponent implements OnInit {

  /**
   * NEM block.
   */
  @Input()
  blockSelected: Block;
  /**
   * NEM transactions to display.
   */
  @Input()
  transactions: Transaction[];

  /**
   * Table columns to display.
   */
  displayedColumns: string[] = ['recipient', 'amount', 'fee', 'timeStamp'];

  /**
   * @param dialog Material design Dialog
   */
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  /**
   * Open dialog of transaction details.
   * @param transaction NEM transaction
   */
  openDialog(transaction: Transaction): void {
    const dialogRef = this.dialog.open(TxesDetailsComponent, {
      width: '90%',
      data: transaction
    });
  }
}
