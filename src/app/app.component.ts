import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { SinagaPage } from '../pages/sinaga/sinaga';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = SinagaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
   // Optional OneSignal code for iOS to prompt users later
      // Set your iOS Settings
      var iosSettings = {};
      iosSettings["kOSSettingsKeyAutoPrompt"] = false; // will not prompt users when start app 1st time
      iosSettings["kOSSettingsKeyInAppLaunchURL"] = false; // false opens safari with Launch URL

      // OneSignal Code start:
      // Enable to debug issues.
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        if (jsonData.notification.payload.additionalData != null) {
          console.log("Here we access addtional data");
          if (jsonData.notification.payload.additionalData.openURL != null) {
            console.log("Here we access the openURL sent in the notification data");

          }
        }
      };

      window["plugins"].OneSignal
        .startInit("359d02c0-e789-4d3b-aee7-3a96935c7b33")
        .iOSSettings(iosSettings) // only needed if added Optional OneSignal code for iOS above
        .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
        
    });
  }
}

