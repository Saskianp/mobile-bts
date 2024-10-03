import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async presentToast(text: string) {
    this.toastController.getTop().then((res) => {
      if (res !== undefined) {
        this.toastController.dismiss();
      }
    });
    const toast = await this.toastController.create({
      message: text,
      duration: 2500,
      position: 'bottom',
      color: 'danger',
      mode: 'md',
    });
    toast.present();
  }

  async presentToastSuccess(text: string) {
    this.toastController.getTop().then((res) => {
      if (res !== undefined) {
        this.toastController.dismiss();
      }
    });
    const toast = await this.toastController.create({
      message: text,
      duration: 3500,
      position: 'bottom',
      color: 'success',
      mode: 'md',
      cssClass: 'toast-custom-text', 
    });
    toast.present();
  }
}
