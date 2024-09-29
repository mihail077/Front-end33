import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComment } from '../../../model';

@Component({
  selector: 'app-comment-details',
  
  templateUrl: './comment-details.component.html',
  styleUrl: './comment-details.component.css'
})
export class CommentDetailsComponent {
  @Input() comment!: IComment

  @Output() hideComment = new EventEmitter(); 

  isVisible: boolean = false;

  toggleVisibility(): any {
    this.isVisible = !this.isVisible;
    if (!this.isVisible) {
      this.hideComment.next(this.comment); 
    }
  }
} 
