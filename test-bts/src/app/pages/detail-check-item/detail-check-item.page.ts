import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StateService } from 'src/app/services/state.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-detail-check-item',
  templateUrl: './detail-check-item.page.html',
  styleUrls: ['./detail-check-item.page.scss'],
})
export class DetailCheckItemPage implements OnInit {

  @Input() dataChecklist: any;
  @Input() dataDetailChecklist: any;
  detailChecklistItem: any;
  itemName: string = '';
  status: string = '';

  
  constructor(
    private apiService: ApiService,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private storage: StorageService,
    private stateService: StateService,
    private navCtrl: NavController,
    private toast: ToastService,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getDataItem(this.dataChecklist.id, this.dataDetailChecklist.id);
  }

  cancel(){
    this.modalController.dismiss();
  }

  async getDataItem(checklistID: number, checklistItemID: number) {
    // const loading = await this.loadingController.create({
    //   message: 'Loading',
    //   spinner: 'bubbles',
    //   mode: 'ios',
    // });
    // await loading.present();

    this.apiService
      .getItemChecklistItem(  
        checklistID,
        checklistItemID
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          let data = res.data.data;
          this.dataDetailChecklist = data;
          console.log(this.dataDetailChecklist);
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

  async updateStatus(checklistID: number, checklistItemID: number) {
    // const loading = await this.loadingController.create({
    //   message: 'Loading',
    //   spinner: 'bubbles',
    //   mode: 'ios',
    // });
    // await loading.present();

    this.apiService
      .updateStatusChecklistItem(  
        checklistID,
        checklistItemID
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          let data = res.data.data;
          this.toast.presentToastSuccess('Berhasil update status');
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

  async renameItemName(checklistID: number, checklistItemID: number) {
    // const loading = await this.loadingController.create({
    //   message: 'Loading',
    //   spinner: 'bubbles',
    //   mode: 'ios',
    // });
    // await loading.present();

    this.apiService
      .renameItemChecklistItem(  
        checklistID,
        checklistItemID,
        this.itemName
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          let data = res.data.data;
          this.toast.presentToastSuccess('Berhasil rename checklist item')
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

  async deleteChecklistItem(checklistID: number, checklistItemID: number) {
    // const loading = await this.loadingController.create({
    //   message: 'Loading',
    //   spinner: 'bubbles',
    //   mode: 'ios',
    // });
    // await loading.present();

    this.apiService
      .deleteItemChecklistItem(  
        checklistID,
        checklistItemID
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          this.toast.presentToastSuccess('Berhasil menghapus checklist item')
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

}
