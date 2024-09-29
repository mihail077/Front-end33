import { Component } from '@angular/core';
import { Comments } from '../../../../constans';

@Component({
  selector: 'app-comments',
  
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  comments = Comments
}
