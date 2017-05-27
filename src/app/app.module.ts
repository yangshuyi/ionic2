import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Movie} from "../providers/movie";
import {MoviePage} from "../pages/movie/movie";
import {IntroPage} from "../pages/intro/intro";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    MoviePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    MoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Movie,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
