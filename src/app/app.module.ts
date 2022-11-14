import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component';
import { FaqComponent } from './faq/faq.component';
import { LogpageComponent } from './logpage/logpage.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FaqComponent,
    LogpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
