import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SignupComponent } from './signup/signup/signup.component';
import {AppRoutingModule} from './app-routing.module';
import { UsersComponent } from './users/users-component/users-component.component';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersService} from './users/users-component/users.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SignupComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
