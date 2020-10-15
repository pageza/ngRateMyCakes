import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayCakeComponent} from './display-cake/display-cake.component';


const routes: Routes = [
  {path: 'cake/:id', component: DisplayCakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
