import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { InputDialogOptions } from './input-dialog-options.model';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.css']
})
export class InputDialogComponent implements OnInit {

  public options: InputDialogOptions = {};

  constructor(public dialogRef: MatDialogRef<InputDialogComponent>) { }

  ngOnInit() {
  }

}
