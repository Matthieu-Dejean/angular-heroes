import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artiste } from '../models/artistes';

@Injectable({
  providedIn: 'root'
})
export class ArtistesService {
  private artistesPath = 'artistes';
  
  constructor(private http: HttpClient) {}

  getArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(environment.apiUrl + this.artistesPath);
  }
}
