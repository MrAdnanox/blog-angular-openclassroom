import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  created_at = new Date();
  allPosts = [
    {
      title: 'title 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor mauris eget enim vulputate euismod. Fusce dolor elit, pulvinar id suscipit sodales, posuere et ex. Quisque scelerisque felis id leo maximus, a faucibus nulla ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lacinia ornare metus non rhoncus. Morbi scelerisque rutrum quam at auctor. Fusce non leo eget dui gravida efficitur. Duis iaculis vitae ligula vel iaculis. Etiam lacinia elit a lectus venenatis, ac imperdiet ligula varius.      ',
      loveIts: 3,
      created_at: this.created_at
    },
    {
      title: 'title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor mauris eget enim vulputate euismod. Fusce dolor elit, pulvinar id suscipit sodales, posuere et ex. Quisque scelerisque felis id leo maximus, a faucibus nulla ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lacinia ornare metus non rhoncus. Morbi scelerisque rutrum quam at auctor. Fusce non leo eget dui gravida efficitur. Duis iaculis vitae ligula vel iaculis. Etiam lacinia elit a lectus venenatis, ac imperdiet ligula varius.      ',
      loveIts: -1,
      created_at: this.created_at
    },
    {
      title: 'title 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor mauris eget enim vulputate euismod. Fusce dolor elit, pulvinar id suscipit sodales, posuere et ex. Quisque scelerisque felis id leo maximus, a faucibus nulla ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur lacinia ornare metus non rhoncus. Morbi scelerisque rutrum quam at auctor. Fusce non leo eget dui gravida efficitur. Duis iaculis vitae ligula vel iaculis. Etiam lacinia elit a lectus venenatis, ac imperdiet ligula varius.      ',
      loveIts: 0,
      created_at: this.created_at
    }
  ];
}
