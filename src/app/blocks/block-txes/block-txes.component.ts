import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/interfaces/Block';
import { Transaction } from 'src/app/interfaces/Transaction';
import { TxesDetailsComponent } from './txes-details/txes-details.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-block-txes',
  templateUrl: './block-txes.component.html',
  styleUrls: ['./block-txes.component.css']
})
export class BlockTxesComponent implements OnInit {

  @Input()
  blockSelected: Block;
  @Input()
  transactions: Transaction[];

  displayedColumns: string[] = ['recipient', 'amount', 'fee', 'timeStamp'];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(transaction: Transaction): void {
    const dialogRef = this.dialog.open(TxesDetailsComponent, {
      width: '90%',
      data: transaction
    });
  }
}
