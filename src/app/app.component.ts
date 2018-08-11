import { Component } from '@angular/core';
import {trigger} from '@angular/animations';
import {zoom} from './img-anims';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('imgState', zoom({
      initOpacity: .5,
      initScale: .7,
      duration: '300ms',
      easing: 'cubic-bezier(0.68, -0.55, 0.165, 2.3)'
    }))
  ]
})
export class AppComponent {
}
