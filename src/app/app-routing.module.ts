import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

/**
 * Routes to default and not found components.
 */
const routes: Routes = [
  { path: '', redirectTo: '/blocks', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
