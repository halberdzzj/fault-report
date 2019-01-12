import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRouteModule } from './services/routers';
import { UserMgnComponent } from './components/home/user-mgn/user-mgn.component';
import { ReportMgnComponent } from './components/home/report-mgn/report-mgn.component';
import { CommonService } from './services/common.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserMgnComponent,
    ReportMgnComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
