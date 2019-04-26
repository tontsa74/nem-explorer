import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksComponent } from './blocks.component';

@NgModule({
  declarations: [
    BlocksComponent
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    MatTableModule
  ]
})
export class BlocksModule { }
