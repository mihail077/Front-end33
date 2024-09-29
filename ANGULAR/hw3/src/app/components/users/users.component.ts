import { Component } from '@angular/core';
import { IUser } from '../../../model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users!: IUser[]
  styleData = 'padding: 10px; border: 2px solid red'

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.users = users)
  }

  handleHideUser(user: IUser): any {
    console.log(`data transfered to parent component: ${user.name}`);
  }
} 
