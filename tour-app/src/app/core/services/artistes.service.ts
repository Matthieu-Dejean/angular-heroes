import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artistes } from '../models/artistes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistesService {
  private artistesPath = 'artistes';
  
  getArtistes(): Observable<Artistes[]> {
    return this.http.get<Artistes[]>(environment.apiUrl + this.artistesPath);;
  }

  constructor(private http: HttpClient) { }
}
