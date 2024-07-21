import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  Email: string = '';

  constructor(
    private authService: AuthserviceService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  async forgotPassword() {
    this.authService.forgotPassword(this.Email).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: response.message,
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateForward('/verify-otp');
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }
}
