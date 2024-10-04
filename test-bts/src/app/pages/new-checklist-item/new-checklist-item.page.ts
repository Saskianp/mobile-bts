import { ToastService } from 'src/app/services/toast.service';
import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { StateService } from 'src/app/services/state.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-new-checklist-item',
  templateUrl: './new-checklist-item.page.html',
  styleUrls: ['./new-checklist-item.page.scss'],
})
export class NewChecklistItemPage implements OnInit {
  @Input() dataChecklist: any;

  itemName: string = '';

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

  async doSubmit(checklistID: number) {
    const loading = await this.loadingController.create({
      message: 'Mengirim',
      spinner: 'bubbles',
      mode: 'ios',
    });
    await loading.present();

    this.apiService
      .postNewChecklistItem(  
        checklistID,      
        this.itemName
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          let data = res.data;
          console.log(data);
          this.toast.presentToastSuccess('Berhasil Membuat Checklist Name Item');
          this.cancel();
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
    this.modalController.dismiss();
  }

}
