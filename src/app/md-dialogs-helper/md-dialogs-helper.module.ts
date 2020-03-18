import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MdDialogsHelperService } from './md-dialogs-helper.service';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [ConfirmDialogComponent, InputDialogComponent],
  entryComponents: [ConfirmDialogComponent, InputDialogComponent],
  providers: [MdDialogsHelperService]
})
export class MdDialogsHelperModule { }
