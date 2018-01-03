import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MdDialogsHelperService } from './md-dialogs-helper.service';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  providers: [MdDialogsHelperService]
})
export class MdDialogsHelperModule { }
