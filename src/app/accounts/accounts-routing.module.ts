import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const accountsRoutes: Routes = [
  { path: 'accounts', component: AccountsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(accountsRoutes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
