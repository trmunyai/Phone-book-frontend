import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {PhoneBookModel} from '../phone-book.model';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PhoneBookModel,
              public dialogRef: MatDialogRef<ModalDialogComponent>) {
  }

  close(): void {
    this.dialogRef.close();
  }
}
