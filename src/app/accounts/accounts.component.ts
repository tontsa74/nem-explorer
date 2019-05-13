import { Component, OnInit } from '@angular/core';
import { NemNisService } from '../nem-nis.service';
import { Account } from '../interfaces/Account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  address; // = 'NCSL345UPDK5X4WAZ2RMDVCYBAFZATIDCTTLHFFK';
  account: Account;

  constructor(private nemnis: NemNisService) { }

  ngOnInit() {
  }

  fetchAccount(address: string) {
    this.nemnis.fetchAccount(address, (resp) => {
      console.log(resp);
      this.account = resp;
    });
  }

}
