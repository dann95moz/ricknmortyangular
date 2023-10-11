import { Component } from '@angular/core';
import { Observable , tap} from 'rxjs';
import { Characters } from 'src/app/interfaces/global/characters.interface';
import { GetCharacterService } from 'src/app/services/get-character.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CharacterDialogComponent } from '../../dialogs/character-dialog/character-dialog.component';
import { CharactersResults } from 'src/app/interfaces/results/characterResults.interface';
@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  characters = new Observable<Characters>()
  constructor(
    private GetCharacterService: GetCharacterService,
    public dialog: MatDialog
  ) {
   this.characters= this.GetCharacterService.getFilteredCharacters()
  }
  openDialog(character:CharactersResults) {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      data: character
    })
    
  }
}
