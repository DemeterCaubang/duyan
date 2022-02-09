import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon:'home' },
    { title: 'Community', url: '/community', icon: 'chatbubbles' },
    { title: 'Webinars', url: '/webinars', icon: 'videocam' },
    { title: 'Health and Wellness Corner', url: '/health-and-wellness', icon: 'fitness' },
    { title: 'Consultation', url: '/consultation', icon: 'calendar' },
    { title: 'Quote of the Day', url: '/quote', icon: 'aperture' },
  ];
  public labels = ['FAQ', 'About'];
  constructor() {}
}
