import { Injectable } from '@angular/core';
import { SerializeService } from './serialize.service';
import { HttpClient } from '@angular/common/http';
import { filterEpisode } from '../interfaces/filters/filterEpisode.interface';
import { Episode } from '../interfaces/global/episode.interface';
import { url } from './api.config';
import { Observable } from 'rxjs';
import { EpisodeResults } from '../interfaces/results/episodeResults.interface';

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
  getMultipleEpisodes(episodes: number[]): Observable<EpisodeResults[]> {
    const stringNumbers=episodes.toString()
    return this.http.get<EpisodeResults[]>(`${url}/episode/${stringNumbers}`);
  }
}
