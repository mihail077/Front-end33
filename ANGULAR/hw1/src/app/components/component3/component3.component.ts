import { Component } from '@angular/core';

@Component({
  selector: 'app-component3',
  standalone: true,
  imports: [],
  // templateUrl: './component3.component.html',
  // styleUrl: './component3.component.css'
  template: `
    <p>component3 works!</p>
  `,
  styles: `
    p {
      color: yellow;
      text-align: center;
    }
  `
})
export class Component3Component {

}
