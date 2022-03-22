import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-freedom-wall',
  templateUrl: './freedom-wall.page.html',
  styleUrls: ['./freedom-wall.page.scss'],
})
export class FreedomWallPage implements OnInit {

  constructor(private inBrowser: InAppBrowser) { }
  
  opentab1(){
    this.inBrowser.create("https://www.google.com",'_self');
  }

  ngOnInit() {
  }

}
