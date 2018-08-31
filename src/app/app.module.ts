import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SinagaPage } from '../pages/sinaga/sinaga';
import { TampilanMenuPage } from '../pages/tampilan-menu/tampilan-menu';
import { PengajuanCutiPage } from '../pages/pengajuan-cuti/pengajuan-cuti';
import { MonitoringPengajuanCutiPage } from '../pages/monitoring-pengajuan-cuti/monitoring-pengajuan-cuti';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SinagaPage,
    TampilanMenuPage,
    PengajuanCutiPage,
    MonitoringPengajuanCutiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SinagaPage,
    TampilanMenuPage,
    PengajuanCutiPage,
    MonitoringPengajuanCutiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}