import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDialogComponent } from './input-dialog.component';
import {
  MatDialogRef,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material';
import { MockDialogRef } from '../confirm-dialog/confirm-dialog.component.spec';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('InputDialogComponent', () => {
  let component: InputDialogComponent;
  let fixture: ComponentFixture<InputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputDialogComponent],
      imports: [
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useClass: MockDialogRef
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
