import { Component, OnInit } from '@angular/core';
import { NemNisService } from '../nem-nis.service';
import { Account } from '../interfaces/Account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  address = 'NDEVPOSK4OMR4PRTLYFHX4W5QTOND7TZDT2DTU4Q';
  account: Account;

  constructor(private nemnis: NemNisService) { }

  ngOnInit() { }

  fetchAccount(address: string) {
    this.nemnis.fetchAccount(address, (resp) => {
      console.log(resp);
      if (resp.account) {
        this.account = resp;
      }
    });
  }

}
