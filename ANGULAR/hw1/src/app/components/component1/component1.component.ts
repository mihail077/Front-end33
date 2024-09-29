import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  // templateUrl: './component1.component.html',
  // styleUrl: './component1.component.css'
  template: `
  <p>component1 works!</p>
  `,
  styles: `
  p {
    color: red;
    text-align: center;
  }
  `
})
export class Component1Component {

}
