import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeExampleComponent } from '../../code-example/code-example.component';

@Component({
  selector: 'app-chapter2',
  standalone: true,
  imports: [CommonModule, CodeExampleComponent],
  templateUrl: './chapter2.component.html',
  styleUrl: './chapter2.component.scss'
})
export class Chapter2Component {
  codeExample2= `{
  function greet(who: string) {
  console.log('Hello', who);
}
  }`

}
