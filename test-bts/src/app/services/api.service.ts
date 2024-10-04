import { StateService } from 'src/app/services/state.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HTTP,
    private stateService: StateService,
  ) {
    // console.log(this.stateService.userData?.user.app_id || null);
  }

  ionViewWillEnter() {}

  private url = environment.apiurl;
  private port = environment.apiport;  

  private address =
    'http://' + this.url + ':' + this.port + '/api/';

  async regist(email: string, username: string, password: string) {
    let url = this.address + 'register';

    let headers = {
    };

    let body = {      
      email: email,
      username: username,
      password: password
    };

    console.log(url, body);
    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .post(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

   async login(username: string, password: string) {
    let url = this.address + 'login';

    let headers = {
    };

    let body = {      
      username: username,
      password: password
    };

    console.log(url, body);
    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .post(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }
  

  async getAllChecklist() {
    let url = this.address + 
    'checklist';

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {};

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .get(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

  async postChecklist(name: string) {
    let url = this.address + 
    'checklist';

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {
      name: name
    };

    console.log(body);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .post(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

  async deleteChecklist(checklistID: number) {
    let url = this.address + 
    'checklist/' + checklistID;

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {};

    console.log(url);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .delete(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

  async getAllChecklistItem(checklistID: number) {
    let url = this.address + 
    'checklist/' + checklistID + '/item';

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {};

    console.log(url);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .get(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

 async postNewChecklistItem(checklistID: number, itemName: string) {
    let url = this.address + 
    'checklist/' + checklistID + '/item';

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {
      itemName: itemName
    };

    console.log(url);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .post(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

  async getItemChecklistItem(checklistID: number, checklistItemID: number) {
    let url = this.address + 
    'checklist/' + checklistID + '/item/' + checklistItemID;

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {};

    console.log(url);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .get(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

  async updateStatusChecklistItem(checklistID: number, checklistItemID: number) {
    let url = this.address + 
    'checklist/' + checklistID + '/item/' + checklistItemID;

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {};

    console.log(url);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .put(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

  async deleteItemChecklistItem(checklistID: number, checklistItemID: number) {
    let url = this.address + 
    'checklist/' + checklistID + '/item/' + checklistItemID;

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {};

    console.log(url);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .delete(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

    async renameItemChecklistItem(checklistID: number, checklistItemID: number, itemName: string) {
    let url = this.address + 
    'checklist/' + checklistID + '/item/' + checklistItemID;

    let headers = {
      Authorization: 'Bearer ' + this.stateService.userData?.token,
    };

    let body = {
      itemName: itemName
    };

    console.log(url);

    this.http.setRequestTimeout(30);
    this.http.setDataSerializer('json');
    return this.http
      .put(url, body, headers)
      .then((response) => {
        try {
          return {
            status: response.status,
            data: JSON.parse(response.data),
          };
        } catch {
          return {
            status: response.status,
            data: response.data,
          };
        }
      })
      .catch((err) => {
        try {
          return {
            status: err.status,
            data: JSON.parse(err.error),
          };
        } catch {
          return {
            status: err.status,
            data: err.error,
          };
        }
      });
    }

}