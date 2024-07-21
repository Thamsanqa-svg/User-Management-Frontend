import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRolePagePageRoutingModule } from './create-role-page-routing.module';

import { CreateRolePagePage } from './create-role-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateRolePagePageRoutingModule
  ],
  declarations: [CreateRolePagePage]
})
export class CreateRolePagePageModule {}
