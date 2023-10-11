import { Component, Inject } from '@angular/core';
import { CharacterCardComponent } from '../../cards/character-card/character-card.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharactersResults } from 'src/app/interfaces/results/characterResults.interface';

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.css']
})
export class CharacterDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CharacterCardComponent>,
    @Inject(MAT_DIALOG_DATA) public character: CharactersResults
  ) {
  console.log(character);
  
}
}
