import { Injectable } from '@angular/core';
import { filterCharacter } from '../interfaces/filters/filterCharacter.interface';
import { SerializeService } from './serialize.service';
import { Characters } from '../interfaces/global/characters.interface';
import { url } from './api.config';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharactersResults } from '../interfaces/results/characterResults.interface';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterService {
  constructor( private serialize: SerializeService, private http: HttpClient) { }

  getFilteredCharacters(filterCharacter?: filterCharacter) : Observable<Characters> {
    const queryString = this.serialize.serializeObjectToQueryString(filterCharacter);
    return this.http.get<Characters>(`${url}/character/?  ${queryString}`);
   }
  getFilteredCharactersByIds(filterCharacter: string[]): Observable<CharactersResults[] > {
    return this.http.get<CharactersResults[] >(`${url}/character/${filterCharacter}`);
  }
 
}
