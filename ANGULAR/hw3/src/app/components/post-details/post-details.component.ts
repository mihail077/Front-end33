import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IPost } from '../../../model';

@Component({
  selector: 'app-post-details',
  
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  @Input() post!: IPost

  @Output() hidePost = new EventEmitter(); 

  isVisible: boolean = false;

  toggleVisibility(): any {
    this.isVisible = !this.isVisible;
    if (!this.isVisible) {
      this.hidePost.next(this.post); 
    }
  }
} 
