import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TestingShadowDomComponent } from './testing-shadow-dom/testing-shadow-dom.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
  ],
  declarations: [AppComponent, TestingShadowDomComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
