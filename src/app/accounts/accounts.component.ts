import { Component, OnInit } from '@angular/core';
import { NemNisService } from '../nem-nis.service';
import { Account } from '../interfaces/Account';

/**
 * Displays account data from address of user input.
 */
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  /**
   * NEM account address
   */
  address = 'NDEVPOSK4OMR4PRTLYFHX4W5QTOND7TZDT2DTU4Q';

  /**
   * NEM account.
   */
  account: Account;

  /**
   * @param nemnis Service to fetch data.
   */
  constructor(private nemnis: NemNisService) { }

  ngOnInit() { }

  /**
   * Fetch Account data from service.
   * @param address NEM account address
   */
  fetchAccount(address: string) {
    this.nemnis.fetchAccount(address, (resp) => {
      if (resp.account) {
        this.account = resp;
      }
    });
  }

}
