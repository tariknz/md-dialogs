import { TestBed, inject } from '@angular/core/testing';

import { MdDialogsHelperService } from './md-dialogs-helper.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

describe('MdDialogsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [MdDialogsHelperService],
      declarations: [ConfirmDialogComponent]
    });
  });

  it('should be created', inject([MdDialogsHelperService], (service: MdDialogsHelperService) => {
    expect(service).toBeTruthy();
  }));
});
