import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatDialogModule, MatPaginatorModule } from '@angular/material';

import { NodesRoutingModule } from './nodes-routing.module';
import { NodesComponent } from './nodes.component';

@NgModule({
  declarations: [NodesComponent],
  imports: [
    CommonModule,
    NodesRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class NodesModule { }
