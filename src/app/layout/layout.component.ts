import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidePannelComponent } from "./sidepannel/sidepannel.component";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [CommonModule, RouterModule, SidePannelComponent],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {}
