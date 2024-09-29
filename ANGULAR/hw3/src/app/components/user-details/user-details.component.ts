import { Component,EventEmitter,Input, Output } from '@angular/core';
import { IUser } from '../../../model';
@Component({
  selector: 'app-user-details',
  
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() user!: IUser

  @Output() hideUser = new EventEmitter(); 

  isVisible: boolean = false;

  toggleVisibility(): any {
    this.isVisible = !this.isVisible;
    if (!this.isVisible) {
      this.hideUser.next(this.user); 
    }
  }
} 
