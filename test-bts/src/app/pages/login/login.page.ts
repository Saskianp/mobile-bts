import { ToastService } from 'src/app/services/toast.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { StateService } from 'src/app/services/state.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    username : 'saskia',
    password : '123'
  };

  showPassword: boolean = false;  

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

  async showOffPassword() {
    this.showPassword = !this.showPassword;
  }

  async doSubmit() {
    const loading = await this.loadingController.create({
      message: 'Login',
      spinner: 'bubbles',
      mode: 'ios',
    });
    await loading.present();

    console.log(this.user);
    this.apiService
      .login(        
        this.user.username,
        this.user.password
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          let data = res.data.data;
          // console.log(data.data.token);
          this.storage.set('UserData', data)?.then(() => {
            this.stateService.userData = data;
            console.log(this.stateService.userData);
            this.toast.presentToastSuccess('Berhasil Login');
            this.navCtrl.navigateRoot('tabs/tab1');
          });
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

  regist(){
    this.navCtrl.navigateRoot('regist');
  }
}
