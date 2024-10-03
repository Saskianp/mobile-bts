import { UserData } from './../interface/mobile';
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  ViewData: any;
  constructor(private storage: StorageService) {}

  private userData: UserData | any;

  public get UserData(): UserData {
    return this.userData;
  }

  public async isLogin(): Promise<any> {
    return await this.storage.get('user_data')?.then((data) => {
      if (data !== null) {
        try {
          this.userData = data;
          return true;
        } catch (e) {
          this.userData = undefined;
          return false;
        }
      } else {
        this.userData = undefined;
        return false;
      }
    });
  }

  //get user data from storage
  public async getUserData(): Promise<any> {
    return await this.storage
      .get('user_data')
      ?.then((data) => {
        if (data !== null) {
          try {
            this.userData = data;
            return data;
          } catch (e) {
            console.error(e);
            return undefined;
          }
        } else {
          this.userData = undefined;
          return undefined;
        }
      })
      .catch((err) => {
        console.error(err);
        return undefined;
      });
  }

  //set user data to storage
  public async setUserData(userData: any): Promise<boolean> {
    let success: boolean = false;
    await this.storage
      .set('user_data', userData)
      ?.then(() => {
        this.userData = userData;
        console.info('User Data Stored');
        success = true;
      })
      .catch((err) => {
        console.error(err);
        success = false;
      });
    return success;
  }

  //del user data from storage
  public async delUserData() {
    await this.storage.remove('user_data')?.then(() => {
      console.info('Data User Deleted');
    });
  }
}
