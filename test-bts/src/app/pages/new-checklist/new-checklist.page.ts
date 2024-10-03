import { ToastService } from 'src/app/services/toast.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { StateService } from 'src/app/services/state.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-new-checklist',
  templateUrl: './new-checklist.page.html',
  styleUrls: ['./new-checklist.page.scss'],
})
export class NewChecklistPage implements OnInit {

  name: string = '';

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
  }

  async doSubmit() {
    const loading = await this.loadingController.create({
      message: 'Mengirim',
      spinner: 'bubbles',
      mode: 'ios',
    });
    await loading.present();

    this.apiService
      .postChecklist(        
        this.name
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          let data = res.data;
          console.log(data);
          this.toast.presentToastSuccess('Berhasil Membuat Checklist');
          this.navCtrl.navigateRoot('tabs/tab1');
          loading.dismiss();
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
          loading.dismiss();
        }
      });
  }

  cancel(){
    this.navCtrl.navigateRoot('tabs/tab1');
  }


}


