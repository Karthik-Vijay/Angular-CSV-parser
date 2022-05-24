import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ExportCsvComponent } from './export-csv/export-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTransactionsComponent,
    ExportCsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
