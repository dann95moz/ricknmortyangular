import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocationCardComponent } from '../../cards/location-card/location-card.component';
import { LocationResults } from 'src/app/interfaces/results/locationResult.interface';
import { GetCharacterService } from 'src/app/services/get-character.service';
import { Observable } from 'rxjs';
import { CharactersResults } from 'src/app/interfaces/results/characterResults.interface';

@Component({
  selector: 'app-places-dialog',
  templateUrl: './places-dialog.component.html',
  styleUrls: ['./places-dialog.component.css']
})
export class PlacesDialogComponent {
  residentsList: string[] = [];
  characters= new Observable<CharactersResults[]>()
  constructor(
    public dialogRef: MatDialogRef<LocationCardComponent>,
    public GetCharactersService: GetCharacterService,
    @Inject(MAT_DIALOG_DATA) public episode: LocationResults,
  ) {
    this.episode.residents.forEach((resident) => {
     this.residentsList.push(resident.slice(-1)) 
    })
    this.characters= this.GetCharactersService.getMultipleCharacters(this.residentsList)
}
}
