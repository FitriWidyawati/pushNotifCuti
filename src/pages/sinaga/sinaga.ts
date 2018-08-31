import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TampilanMenuPage } from '../tampilan-menu/tampilan-menu';
import { PengajuanCutiPage } from '../pengajuan-cuti/pengajuan-cuti';
import { MonitoringPengajuanCutiPage } from '../monitoring-pengajuan-cuti/monitoring-pengajuan-cuti';

@Component({
  selector: 'page-sinaga',
  templateUrl: 'sinaga.html'
})
export class SinagaPage {

  constructor(public navCtrl: NavController) {
  }
  goToTampilanMenu(params){
    if (!params) params = {};
    this.navCtrl.push(TampilanMenuPage);
  }goToPengajuanCuti(params){
    if (!params) params = {};
    this.navCtrl.push(PengajuanCutiPage);
  }goToMonitoringPengajuanCuti(params){
    if (!params) params = {};
    this.navCtrl.push(MonitoringPengajuanCutiPage);
  }
}
