import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { StateService } from '../services/state.service';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';
import { NewChecklistItemPage } from '../pages/new-checklist-item/new-checklist-item.page';
import { DetailCheckItemPage } from '../pages/detail-check-item/detail-check-item.page';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() dataChecklist: any;
  dataDetailChecklist: any;
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

  ngOnInit() {}

  ionViewWillEnter() {
    this.getAllChecklistItem(this.dataChecklist.id);
  }

  cancel(){
    this.modalController.dismiss();
  }

  async addCheckItem(dataChecklist: number){
    const modal = await this.modalController.create({
      component: NewChecklistItemPage,
      componentProps: { dataChecklist : dataChecklist },
    });

    await modal.present();
  }

  async getAllChecklistItem(checklistID : number) {
    // const loading = await this.loadingController.create({
    //   message: 'Loading',
    //   spinner: 'bubbles',
    //   mode: 'ios',
    // });
    // await loading.present();
    this.apiService
      .getAllChecklistItem(checklistID)
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
              "Server terjadi gangguan"
            );
          }
          // loading.dismiss();
        }
      });
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
          this.toast.presentToastSuccess('Berhasil Menghapus Checklist Item');
          this.ngOnInit();
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

  async datachecklistItem(dataDetailChecklist : any, dataChecklist : any){
    const modal = await this.modalController.create({
      component: DetailCheckItemPage,
      componentProps: { dataDetailChecklist : dataDetailChecklist , dataChecklist : dataChecklist},
    });

    await modal.present();
  }

}
