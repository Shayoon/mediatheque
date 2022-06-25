import { Component, OnInit } from '@angular/core';
import { AlbumHttpService } from 'src/app/services/album-http.service';
import { FilmHttpService } from 'src/app/services/film-http.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  films: any[] = [];
  albums: any[] = [];

  constructor(private serviceFilm: FilmHttpService, private serviceAlbum: AlbumHttpService) { 
    this.serviceFilm.findAll().subscribe(((data)=> this.films = data))
    this.serviceAlbum.findAll().subscribe(((data)=> this.albums = data))
  }

  ngOnInit(): void {
  }

}
