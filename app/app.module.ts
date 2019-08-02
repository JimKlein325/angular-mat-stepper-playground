import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule, MatCardModule, MatStepperModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports:      [ BrowserModule,
   BrowserAnimationsModule,
   FormsModule,
   MatToolbarModule,
   MatCardModule,
   FlexLayoutModule,
   MatIconModule,
   MatStepperModule,
   MatButtonModule,
   ReactiveFormsModule ],

  declarations: [ AppComponent,
  DemoComponent,
  HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
