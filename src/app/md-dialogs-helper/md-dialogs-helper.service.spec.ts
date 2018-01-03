import { TestBed, inject } from '@angular/core/testing';

import { MdDialogsHelperService } from './md-dialogs-helper.service';

describe('MdDialogsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdDialogsHelperService]
    });
  });

  it('should be created', inject([MdDialogsHelperService], (service: MdDialogsHelperService) => {
    expect(service).toBeTruthy();
  }));
});
