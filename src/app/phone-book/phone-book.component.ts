import {Component, OnInit} from '@angular/core';
import {MatDialog, MatIconRegistry, MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {ModalDialogComponent} from './modal-dialog/modal-dialog.component';
import {PhoneBookBackendService} from './phone-book.backend.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {
  displayedColumns = ['name', 'phoneNumber'];
  dataSource;
  dataModel = [];

  constructor(iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer,
              private dialog: MatDialog,
              private phoneBookBackendService: PhoneBookBackendService) {
    iconRegistry.addSvgIcon('note-add',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/baseline-note_add-24px.svg'));
  }

  ngOnInit() {
    this.phoneBookBackendService.getAll().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    }, error1 => {
      alert(error1);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addPhoneBookEntry() {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      width: '30vw',
      height: '40vh',
      data: this.dataSource
    });

    dialogRef.afterClosed().subscribe(data => {
      this.phoneBookBackendService.save({
        name: data.name,
        phoneNumber: data.phoneNumber
      })
        .subscribe(() => {
          this.phoneBookBackendService.getAll()
            .subscribe(responseData => {
              this.dataSource = new MatTableDataSource(responseData);
            });
        });
    });
  }
}

