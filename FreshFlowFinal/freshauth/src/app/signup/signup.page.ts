import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular/standalone';
import { ToastController } from '@ionic/angular';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  user = {
    UserName: '',
    Email: '',
    Password: '',
    alertMessage:''
  };


  constructor(private router:Router,private authService: AuthserviceService, private toastController: ToastController,private  alertController:AlertController) { }

  async register() {
   
    this.authService.register(this.user).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: response.message,
          buttons: ['OK']
        });
        this.router.navigate(['/login']);
        await alert.present();
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
