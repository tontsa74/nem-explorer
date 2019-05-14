import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlocksModule } from './blocks/blocks.module';
import { AccountsModule } from './accounts/accounts.module';
import { MatToolbarModule, MatTabsModule } from '@angular/material';
import { NodesModule } from './nodes/nodes.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BlocksModule,
    AccountsModule,
    NodesModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
