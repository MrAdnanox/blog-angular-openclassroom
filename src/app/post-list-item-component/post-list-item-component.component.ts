import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() postTitle: String;
  @Input() postContent: String;
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;
  constructor() { }

  ngOnInit() {
  }

  addLove() {
    this.postLoveIts++;
  }
  removeLove() {
    this.postLoveIts--;
  }

}
