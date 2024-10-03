import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(
    private navCtrl: NavController,
    private storage: StorageService,
    private stateService: StateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.storage
      .get('UserData')!
      .then(
        (res) => {
          this.stateService.userData = res;
          if (res !== undefined && res !== null) {
            return true;
          } else {
            this.navCtrl.navigateRoot('login', { animated: false });
            return false;
          }
        },
        (err: any) => {
          this.navCtrl.navigateRoot('login', { animated: false });
          return false;
        }
      )
      .catch((err: any) => {
        this.navCtrl.navigateRoot('login', { animated: false });
        return false;
      });
  }
}

export const isAuth: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  return inject(AuthGuard).canActivate(next, state);
};
