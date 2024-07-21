import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRolePagePage } from './create-role-page.page';

const routes: Routes = [
  {
    path: '',
    component: CreateRolePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRolePagePageRoutingModule {}
