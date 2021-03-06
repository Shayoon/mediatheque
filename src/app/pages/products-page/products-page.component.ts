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
    this.serviceFilm.findAll().subscribe(((data) => this.films = data))
    this.serviceAlbum.findAll().subscribe(((data) => this.albums = data))
  }

  ngOnInit(): void {
  }

  onDeleteFilm(id: number) {
    this.serviceFilm.delete(id).subscribe(() => {
      this.films = this.films.filter(film => film.id !== id)
    })
  }

  onDeleteAlbum(id: number) {
    this.serviceAlbum.delete(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id)
    })
  }

  onSaveFilm(film: any) {
    this.serviceFilm.save(film).subscribe((newFilm: any) => this.films.push(newFilm))
  }

  onSaveAlbum(album: any) {
    this.serviceAlbum.save(album).subscribe((newAlbum: any) => this.albums.push(newAlbum))
  }
}
