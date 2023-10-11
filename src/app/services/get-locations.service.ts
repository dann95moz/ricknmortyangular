import { Injectable } from '@angular/core';
import { SerializeService } from './serialize.service';
import { HttpClient } from '@angular/common/http';
import { filterLocation } from '../interfaces/filters/filterLocation.interface';
import { Episode } from '../interfaces/global/episode.interface';
import { url } from './api.config';
import { Location } from '../interfaces/global/location.interface';

@Injectable({
  providedIn: 'root'
})
export class GetLocationsService {

  constructor(private serialize: SerializeService, private http: HttpClient) { 

  }
  getFilteredLocations(filterEpisode?: filterLocation) {
    const queryString = this.serialize.serializeObjectToQueryString(filterEpisode);
    return this.http.get<Location>(`${url}/location/?${queryString}`);
  }
}
