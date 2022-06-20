import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes =[
{
  path:'',
  component:AdminComponent,
  children:[{ path:'customer',
  loadChildren:()=>import('../admin/customer/customer.module').then((m)=>m.CustomerModule)}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AdminRoutingModule {}
