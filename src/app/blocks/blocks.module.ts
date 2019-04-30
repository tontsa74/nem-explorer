import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksComponent } from './blocks.component';
import { BlockTxesComponent } from './block-txes/block-txes.component';
import { MsNemesisPipe } from '../pipes/ms-nemesis.pipe';

@NgModule({
  declarations: [
    BlocksComponent,
    BlockTxesComponent,
    MsNemesisPipe
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    MatTableModule
  ]
})
export class BlocksModule { }
