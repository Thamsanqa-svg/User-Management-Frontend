import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignRolePage } from './assign-role.page';

const routes: Routes = [
  {
    path: '',
    component: AssignRolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignRolePageRoutingModule {}
