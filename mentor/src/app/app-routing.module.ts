import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { Index2Component } from './index2/index2.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MentorComponent } from './mentor/mentor.component';
import { MentorsComponent } from './mentors/mentors.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'index2',component:Index2Component},
  {path:'meetings',component:MeetingsComponent},
  {path:'mentors',component:MentorsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'mentor',component:MentorComponent},
  {path:'index',component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
