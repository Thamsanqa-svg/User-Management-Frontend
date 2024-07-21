import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import {RouterModule,Routes} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AssignRolePageRoutingModule } from './assign-role-routing.module';

import { AssignRolePage } from './assign-role.page';


@NgModule({
  imports: [
   CommonModule,
    FormsModule,
    IonicModule,
   AssignRolePageRoutingModule
  ],
  declarations: [AssignRolePage]
})
export class AssignRolePageModule {}
