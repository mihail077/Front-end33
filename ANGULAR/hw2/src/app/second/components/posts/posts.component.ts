import { Component } from '@angular/core';
import { Posts } from '../../../../constans';

@Component({
  selector: 'app-posts',
  
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
    posts = Posts
}
