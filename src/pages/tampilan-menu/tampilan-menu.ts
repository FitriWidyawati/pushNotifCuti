import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PengajuanCutiPage } from '../pengajuan-cuti/pengajuan-cuti';
import { MonitoringPengajuanCutiPage } from '../monitoring-pengajuan-cuti/monitoring-pengajuan-cuti';

@Component({
  selector: 'page-tampilan-menu',
  templateUrl: 'tampilan-menu.html'
})
export class TampilanMenuPage {

  constructor(public navCtrl: NavController) {
  }
  goToPengajuanCuti(params){
    if (!params) params = {};
    this.navCtrl.push(PengajuanCutiPage);
  }goToMonitoringPengajuanCuti(params){
    if (!params) params = {};
    this.navCtrl.push(MonitoringPengajuanCutiPage);
  }
}
