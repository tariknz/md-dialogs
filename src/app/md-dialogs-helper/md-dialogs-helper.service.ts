import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class MdDialogsHelperService {
  public defaultWidth = '30vw';

  constructor(private dialogs: MatDialog) {}

  public confirm(title: string = 'Confirm Action', message: string = 'Are you sure?'): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmDialogComponent>;

    dialogRef = this.dialogs.open(ConfirmDialogComponent, { width: this.defaultWidth });

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed().pipe(map((res) => !!res)); // always return a boolean value
  }
}
