import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'HackerNewsApp';
  size: NzButtonSize = 'large';
}
