import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayCakeComponent} from './display-cake/display-cake.component';


const routes: Routes = [
  {path: 'cake', component: DisplayCakeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }