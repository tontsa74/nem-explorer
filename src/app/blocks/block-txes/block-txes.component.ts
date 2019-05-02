import { Component, OnInit, Input } from '@angular/core';
import { Block } from 'src/app/interfaces/Block';
import { Transaction } from 'src/app/interfaces/Transaction';

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

  constructor() { }

  ngOnInit() {
  }

  openDialog(transaction: Transaction): void {
    console.log('test ' + JSON.stringify(transaction));
    // const dialogRef = this.dialog.open()
  }
}
