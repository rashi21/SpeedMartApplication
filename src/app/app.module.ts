import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
