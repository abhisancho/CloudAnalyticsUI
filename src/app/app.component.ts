import { Component } from '@angular/core';
import { ConnectService } from './services/connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CloudAnalyticsUI';
  public users: any = [];
  constructor(private connect: ConnectService) {
    this.connect.getUsers().subscribe(result => {
      this.users = result;
    })
  }
}
