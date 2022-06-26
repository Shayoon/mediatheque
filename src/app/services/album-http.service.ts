import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = `${environment.API_URL}albums`

@Injectable({
  providedIn: 'root'
})
export class AlbumHttpService {

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get<any[]>(apiUrl)
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/${id}`)
  }

  save(album: any) {
    return this.http.post<any>(apiUrl, album)
  }
}
