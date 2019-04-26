import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksComponent } from './blocks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BlocksComponent
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class BlocksModule { }
