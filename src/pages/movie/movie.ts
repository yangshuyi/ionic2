import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Movie} from "../../providers/movie";
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html'
})
export class MoviePage {

  constructor(public navCtrl:NavController, public loadingCtrl:LoadingController, public movie:Movie) {

  }

  ionViewDidLoad() {
    console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
  }

  ionViewWillEnter() {
    console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");

    let loadingOpts = {
      spinner: 'hide',
      content: '<div class="custom-spinner-container"><div class="custom-spinner-box"></div></div>',
      duration: 5000
    };

    let loading = this.loadingCtrl.create(loadingOpts);
    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);


    this.movie.loadById('1764796').subscribe(movieSubject => {
      console.log(movieSubject);
    });
  }

  ionViewDidEnter() {
    console.log("3.0 ionViewDidEnter 当进入页面时触发");
  }

  ionViewWillLeave() {
    console.log("4.0 ionViewWillLeave 当将要从页面离开时触发");
  }

  ionViewDidLeave() {
    console.log("5.0 ionViewDidLeave 离开页面时触发");
  }

  ionViewWillUnload() {
    console.log("6.0 ionViewWillUnload 当页面将要销毁同时页面上元素移除时触发");
  }

  ionViewCanEnter() {
    console.log("ionViewCanEnter");
  }

  ionViewCanLeave() {
    console.log("ionViewCanLeave");
  }

}
