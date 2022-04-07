import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  constructor(private inBrowser: InAppBrowser) { }

  opentab1(){
    this.inBrowser.create("https://pahinungod.upou.edu.ph",'_self');
  }

  opentab2(){
    this.inBrowser.create("https://pahinungod.upou.edu.ph",'_self');
  }

  ngOnInit() {
  }

}
