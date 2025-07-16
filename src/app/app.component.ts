import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidePannelComponent } from './layout/sidepannel/sidepannel.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,SidePannelComponent,DashboardComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidepannelCollapsed = false;

  onSidebarToggle(){
    this.isSidepannelCollapsed = !this.isSidepannelCollapsed
  }
}
