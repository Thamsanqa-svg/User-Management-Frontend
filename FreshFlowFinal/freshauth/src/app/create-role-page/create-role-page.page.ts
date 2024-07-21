import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../authservice.service';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-create-role-page',
  templateUrl: './create-role-page.page.html',
  styleUrls: ['./create-role-page.page.scss'],
})
export class CreateRolePagePage implements OnInit {
 roleName:string='';
  constructor(private authService:AuthserviceService, private alertController:AlertController) { }

  ngOnInit() {
  }
  async createRole() {
    this.authService.createRole(this.roleName).subscribe(
      () => {
        this.presentAlert('Success', 'Role created successfully');
      },
      (error) => {
        this.presentAlert('Error', error.error);
      }
    );
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
