import { Component } from '@angular/core';
import { MdDialogsHelperService } from './md-dialogs-helper/md-dialogs-helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public confirmResult: boolean;
  public inputResult: string;

  constructor(private dialogs: MdDialogsHelperService) {}

  public openConfirmDialog() {
    this.dialogs
      .confirm('Confirm Dialog')
      .subscribe(res => (this.confirmResult = res));
  }

  public openInputDialog() {
    this.dialogs
      .input({
        title: 'Input Dialog',
        label: 'Enter text here'
      })
      .subscribe(res => {
        this.inputResult = res;
      });
  }
}
