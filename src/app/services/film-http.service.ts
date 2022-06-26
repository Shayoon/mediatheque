import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = `${environment.API_URL}Films`

@Injectable({
  providedIn: 'root'
})
export class FilmHttpService {

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get<any[]>(apiUrl)
  }

  delete(id:number){
    return this.http.delete(`${apiUrl}/${id}`)
  }

}
