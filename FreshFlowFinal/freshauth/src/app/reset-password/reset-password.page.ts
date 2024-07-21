import { Component} from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthserviceService,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  async resetPassword() {
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Passwords do not match',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.authService.resetPassword({ email: this.email, password: this.password }).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: response.message,
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateForward('/login');
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
  ngOnInit(){

  }
}
