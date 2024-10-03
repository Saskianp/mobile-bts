import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(
    private navController: NavController,
  ) {}

  ngOnInit() {
  }

  regist() {
    this.navController.navigateRoot('regist', { animated: false });
  }

  login() {
    this.navController.navigateRoot('login', { animated: false });
  }

}
