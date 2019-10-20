import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app/app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
