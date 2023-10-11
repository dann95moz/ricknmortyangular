import { Pipe, PipeTransform } from '@angular/core';
import { CharactersResults } from '../interfaces/results/characterResults.interface';

@Pipe({
  name: 'sortCharacters',
  pure: true
})
export class SortCharactersPipe implements PipeTransform {

  transform<CharactersResults>(array: Array<CharactersResults>, args?: string): Array<CharactersResults> {
    if (args) {
      return array.sort((a: any, b: any) => {
      
        if ( a[args].toLowerCase() < b[args].toLowerCase()) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return array
    }
   
  }

}
