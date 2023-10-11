import { Injectable } from '@angular/core';
import { filterCharacter } from '../interfaces/filters/filterCharacter.interface';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SerializeService {
  serializeObjectToQueryString(obj: any): string {
    let params = new HttpParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        params = params.append(key, obj[key]);
      }
    }
    return params.toString();
  }
  
  constructor() { }
}
