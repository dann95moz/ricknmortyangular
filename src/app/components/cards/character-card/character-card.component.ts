import { Component } from '@angular/core';
import { Observable , tap} from 'rxjs';
import { Characters } from 'src/app/interfaces/global/characters.interface';
import { GetCharacterService } from 'src/app/services/get-character.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  characters = new Observable<Characters>()
  constructor(private GetCharacterService: GetCharacterService) {
   this.characters= this.GetCharacterService.getFilteredCharacters().pipe(tap(console.log))
  }
}
