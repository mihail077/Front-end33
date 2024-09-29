import { Component } from '@angular/core';

@Component({
  selector: 'app-component4',
  standalone: true,
  imports: [],
  // templateUrl: './component4.component.html',
  // styleUrl: './component4.component.css'
  template: `
    <p>component4 works!</p>
  `,
  styles: `
  p {
    color: green;
    text-align: center;
  }
  `
})
export class Component4Component {

}
