import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { StateService } from 'src/app/services/state.service';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dataChecklist: any ;

  constructor(
    private apiService: ApiService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private storage: StorageService,
    private stateService: StateService,
    private navCtrl: NavController,
    private toast: ToastService,
  ) {}

  ngOnInit() {
    this.getAllChecklist();
  }
  
  async getAllChecklist() {
    const loading = await this.loadingController.create({
      message: 'Loading',
      spinner: 'bubbles',
      mode: 'ios',
    });
    await loading.present();
    this.apiService
      .getAllChecklist()
      .then((res) => {
        if (res.status === 200) {
          let data = res.data.data;
          this.dataChecklist = data;
          loading.dismiss();
        } else {
          if (res.status === 400) {
              this.toast.presentToast(res.data);
          } else {
              this.toast.presentToast(
              res.data.errorMessage
            );
          }
          loading.dismiss();
        }
      });
  }

}
