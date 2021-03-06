import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksComponent } from './blocks.component';
import { BlockTxesComponent } from './block-txes/block-txes.component';
import { MsNemesisPipe } from '../pipes/ms-nemesis.pipe';
import { TxesDetailsComponent } from './block-txes/txes-details/txes-details.component';
import { MessagePipe } from '../pipes/message.pipe';

@NgModule({
  declarations: [
    BlocksComponent,
    BlockTxesComponent,
    MsNemesisPipe,
    TxesDetailsComponent,
    MessagePipe
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    TxesDetailsComponent
  ]
})
export class BlocksModule { }
