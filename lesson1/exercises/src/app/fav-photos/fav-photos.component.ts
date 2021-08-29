import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images';
  image1 = 'https://noodlepros.ghost.io/content/images/wordpress/2017/12/coding-or-foreign-language-scaled.jpg';
  image2 = 'https://m.media-amazon.com/images/M/MV5BOWEzNDAxYmEtYWU0Zi00ZjZjLTkxY2QtMGY1MjY5ZjVhNDdjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg';
  image3 = 'https://cf.ltkcdn.net/cleaning/images/orig/202845-1737x1414-chores.jpg';

  constructor() { }

  ngOnInit() {
  }

}