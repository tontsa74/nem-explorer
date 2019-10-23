import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

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
