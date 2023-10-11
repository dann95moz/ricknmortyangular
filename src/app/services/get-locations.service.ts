import { Injectable } from '@angular/core';
import { SerializeService } from './serialize.service';
import { HttpClient } from '@angular/common/http';
import { filterLocation } from '../interfaces/filters/filterLocation.interface';
import { Episode } from '../interfaces/global/episode.interface';
import { url } from './api.config';

@Injectable({
  providedIn: 'root'
})
export class GetLocationsService {

  constructor(private serialize: SerializeService, private http: HttpClient) { 

  }
  getFilteredLocations(filterEpisode?: filterLocation) {
    const queryString = this.serialize.serializeObjectToQueryString(filterEpisode);
    return this.http.get<Episode>(`${url}/location/?${queryString}`);
  }
}
