import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidepannel',
  standalone: true,
  imports: [CommonModule,CommonModule,RouterModule],
  templateUrl: './sidepannel.component.html',
  styleUrl: './sidepannel.component.scss'
})
export class SidePannelComponent {
  

}
