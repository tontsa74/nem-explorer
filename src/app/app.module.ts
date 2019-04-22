import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BlocksModule } from './blocks/blocks.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
