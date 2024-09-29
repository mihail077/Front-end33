import { Component } from "@angular/core";
import { Users } from "../../../../constans";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['./users.component.css']  
})

export class UsersComponent {
  users = Users

  rand = Math.round((Math.random()*9)+1)

  // constructor () {
  //   console.log(this.users);
    
  // }
}
