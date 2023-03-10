import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  homeAddress: string = "123 Main St";
  city: string = "New York";
  state: string = "NY";
}
