import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-example.component.html',
  styleUrl: './code-example.component.scss'
})
export class CodeExampleComponent {
  @Input() sectionTitle?: string;
  @Input() language?: string;
  @Input() code: string = '';

}
