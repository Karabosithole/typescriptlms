import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeExampleComponent } from "../code-example/code-example.component";

@Component({
  selector: "app-basics",
  standalone: true,
  imports: [CommonModule, CodeExampleComponent],
  templateUrl: "./basics.component.html",
  styleUrl: "./basics.component.scss",
})
export class BasicsComponent {
  basicsCodeExample = `
compilerOptions": {
"target": "es6",
"module": "commonjs"
}
`;
}
