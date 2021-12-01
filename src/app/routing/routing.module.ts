import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../content/content.component';
import { ErrorComponent } from '../error/error.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes =[
  {path:"" ,component:LoginComponent, pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"kanbam-board", component:ContentComponent},
  {path: 'erro', component: ErrorComponent},
  { path: '**', redirectTo: '/login' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
