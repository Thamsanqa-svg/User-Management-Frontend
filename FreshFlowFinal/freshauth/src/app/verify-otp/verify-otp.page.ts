import { Component } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage {
  Email: string = '';
  otp: string = '';

  constructor(
    private authService: AuthserviceService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}
ngOnInit(){

}
  async verifyOTP() {
    this.authService.verifyOTP(this.Email, this.otp).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: response.message,
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateForward('/reset-password');
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
