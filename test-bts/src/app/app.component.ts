import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { UserService } from './local-storage/user-data.service';
import { AlertService } from './services/alert.service';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) router_outlet: IonRouterOutlet | any;
  back_button_disabled: boolean = false;

  constructor(
    private platform: Platform,
    private userService: UserService,
    private alertSvc: AlertService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.userService.getUserData();
      let backButton = 0;
      this.platform.backButton.subscribeWithPriority(1, () => {
        if (!this.back_button_disabled) {
          if (
            this.router.url === '/tabs/tab1' ||
            this.router.url === '/tabs/tab2' ||
            this.router.url === '/tabs/tab3' ||
            this.router.url === '/login'     
          ) {
            backButton++;
            if (backButton === 2) {
              App.exitApp();
            } else {
              this.alertSvc.presentToast('Tekan sekali lagi untuk keluar');
              setTimeout(() => {
                backButton = 0;
              }, 5000);
            }
          } else if (this.router_outlet && this.router_outlet.canGoBack()) {
            this.router_outlet.pop();
          }
        }
      });
      //#endregion
    });
  }
}
