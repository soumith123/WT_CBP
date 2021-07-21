import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorizationService } from './authorization.service';
import { UsersComponent } from './users/users.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { HospitalsdataComponent } from './hospitalsdata/hospitalsdata.component';
import { SearchPipe } from './search.pipe';
import { SharedModule } from './shared/shared.module';
import { SymptomsformComponent } from './symptomsform/symptomsform.component';
import { SymptomsformchildrenComponent } from './symptomsformchildren/symptomsformchildren.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    UsersComponent,
    HospitalsComponent,
    HospitalsdataComponent,
    SymptomsformComponent,
    SymptomsformchildrenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
