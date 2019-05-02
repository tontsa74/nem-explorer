import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Transaction } from 'src/app/interfaces/Transaction';

@Component({
  selector: 'app-txes-details',
  templateUrl: './txes-details.component.html',
  styleUrls: ['./txes-details.component.css']
})
export class TxesDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transaction) { }

  ngOnInit() {
  }

}
