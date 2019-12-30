import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent, UserReposComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HomeComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatBottomSheetModule,
    MatListModule,
    NgxSpinnerModule
  ],
  entryComponents: [UserReposComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
