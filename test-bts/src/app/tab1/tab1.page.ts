import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { StateService } from 'src/app/services/state.service';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dataChecklist: any ;

  constructor(
    private navController: NavController,
    private apiService: ApiService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private storage: StorageService,
    private stateService: StateService,
    private toast: ToastService,

  ) {}

  ngOnInit() {
    this.getAllChecklist();
  }

  regist() {
    this.navController.navigateRoot('regist', { animated: false });
  }

  login() {
    this.navController.navigateRoot('login', { animated: false });
  }

  async getAllChecklist() {
    // const loading = await this.loadingController.create({
    //   message: 'Loading',
    //   spinner: 'bubbles',
    //   mode: 'ios',
    // });
    // await loading.present();
    this.apiService
      .getAllChecklist()
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          let data = res.data.data;
          this.dataChecklist = data;
          console.log(this.dataChecklist);
          // loading.dismiss();
        } else {
          console.log(res);
          if (res.status === 400) {
            console.log(res);
            this.toast.presentToast(res.data);
          } else {
            console.log(res);
            this.toast.presentToast(
              res.data.errorMessage
            );
          }
          // loading.dismiss();
        }
      });
  }

  async addCheck(){
    this.navController.navigateRoot('new-checklist');
  }

  async deleteChecklist(checklistID: number){
    const loading = await this.loadingController.create({
      message: 'Delete',
      spinner: 'bubbles',
      mode: 'ios',
    });
    await loading.present();
    this.apiService
      .deleteChecklist(checklistID)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          this.toast.presentToastSuccess('Berhasil Menghapus Checklist');
          this.getAllChecklist();
          loading.dismiss();
        } else {
          console.log(res);
          if (res.status === 400) {
            console.log(res);
            this.toast.presentToast(res.data.errorMessage);
          } else {
            console.log(res);
            this.toast.presentToast(
              res.data.errorMessage
            );
          }
          loading.dismiss();
        }
      });
  }
}
