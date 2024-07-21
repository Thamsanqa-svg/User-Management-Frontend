import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.page.html',
  styleUrls: ['./assign-role.page.scss'],
})
export class AssignRolePage implements OnInit {
emailAddress:string='';
roleName:string='';
  constructor(private authService:AuthserviceService,private alertController:AlertController) { }

  ngOnInit() {
  }
  async assignRole() {
    this.authService.assignRole(this.emailAddress, this.roleName).subscribe(
      () => {
        this.presentAlert('Success', 'Role assigned successfully');
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
