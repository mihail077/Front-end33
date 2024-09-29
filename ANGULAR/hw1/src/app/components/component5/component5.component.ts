import { Component } from '@angular/core';

@Component({
  selector: 'app-component5',
  standalone: true,
  imports: [],
  // templateUrl: './component5.component.html',
  // styleUrl: './component5.component.css'
  template: `
  <p>component5 works!</p>
  `,
  styles: `
  p {
    color: skyblue;
    text-align: center;
  }
  `
})
export class Component5Component {

}
