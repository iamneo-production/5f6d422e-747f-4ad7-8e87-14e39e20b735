import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Index2Component } from './index2/index2.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ProfileComponent } from './profile/profile.component';
import { MentorComponent } from './mentor/mentor.component';
import { IndexComponent } from './index/index.component';
//import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    Index2Component,
    MeetingsComponent,
    MentorsComponent,
    ProfileComponent,
    MentorComponent,
    IndexComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
   // MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
