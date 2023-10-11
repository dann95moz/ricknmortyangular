import { Injectable } from '@angular/core';
import { SerializeService } from './serialize.service';
import { HttpClient } from '@angular/common/http';
import { filterEpisode } from '../interfaces/filters/filterEpisode.interface';
import { Episode } from '../interfaces/global/episode.interface';
import { url } from './api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEpisodesService {

  constructor(private serialize: SerializeService, private http: HttpClient) {
    
  }
  getFilteredEpisodes(filterEpisode?: filterEpisode): Observable<Episode> {
    const queryString = this.serialize.serializeObjectToQueryString(filterEpisode);
    return this.http.get<Episode>(`${url}/episode/?${queryString}`);
   }
  
}
