import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './blocks.component';

const blocksRoutes: Routes = [
  { path: 'blocks', component: BlocksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(blocksRoutes)],
  exports: [RouterModule]
})
export class BlocksRoutingModule { }
