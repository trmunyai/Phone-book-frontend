import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {ModalDialogComponent} from './phone-book/modal-dialog/modal-dialog.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule, MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {PhoneBookBackendService} from './phone-book/phone-book.backend.service';
import {PhoneBookComponent} from './phone-book/phone-book.component';
import {Configuration} from './phone-book/phone-book.service.config';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [PhoneBookBackendService, Configuration],
  entryComponents: [ModalDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
