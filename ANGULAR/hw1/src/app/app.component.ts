import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component5Component } from './components/component5/component5.component';
import { Component6Component } from './components/component6/component6.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  imports: [Component1Component,
            Component2Component,
            Component3Component,
            Component4Component,
            Component5Component,
            Component6Component
          ],
  
  template:`
  <h2>my first angular project</h2>
   <hr>       
  <app-component1></app-component1>
  <app-component2></app-component2>
  <app-component3></app-component3>
  <app-component4></app-component4>
  <app-component5></app-component5>
  <app-component6></app-component6>
  <br>
  <p>all components works</p>
  `,
  styles:`
    h2, p {
    text-align: center;
  }      
  `
})
export class AppComponent {
  title = 'hw1';
}
