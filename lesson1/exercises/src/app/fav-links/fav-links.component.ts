import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Bing', url: 'https://www.bing.com' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
