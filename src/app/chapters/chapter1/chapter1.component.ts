import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeExampleComponent } from "../../code-example/code-example.component";
import { LayoutComponent } from "../../layout/layout.component";

@Component({
  selector: "app-chapter1",
  standalone: true,
  imports: [CommonModule, CodeExampleComponent],
  templateUrl: "./chapter1.component.html",
  styleUrl: "./chapter1.component.scss",
})
export class Chapter1Component {
  codeExample1 = `
function greet(who: string) {
  console.log('Hello', who);
}
`;
}
