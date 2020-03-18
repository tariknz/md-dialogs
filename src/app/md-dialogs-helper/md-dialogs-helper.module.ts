import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MdDialogsHelperService } from './md-dialogs-helper.service';
import { InputDialogComponent } from './input-dialog/input-dialog.component';

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
export class MdDialogsHelperModule {}
