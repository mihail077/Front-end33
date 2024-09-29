import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  // templateUrl: './component2.component.html',
  // styleUrl: './component2.component.css',
  template: `
  <p>component2 works!</p>
  `,
  styles: `
  p {
    color: orange;
    text-align: center;
  }
  `
})
export class Component2Component {

}
