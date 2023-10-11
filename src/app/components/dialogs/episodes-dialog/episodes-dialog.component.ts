import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EpisodeCardComponent } from '../../cards/episode-card/episode-card.component';
import { EpisodeResults } from 'src/app/interfaces/results/episodeResults.interface';
import { GetEpisodesService } from '../../../services/get-episodes.service';
import { CharactersResults } from 'src/app/interfaces/results/characterResults.interface';
import { Observable } from 'rxjs';
import { GetCharacterService } from 'src/app/services/get-character.service';

@Component({
  selector: 'app-episodes-dialog',
  templateUrl: './episodes-dialog.component.html',
  styleUrls: ['./episodes-dialog.component.css']
})
export class EpisodesDialogComponent {
  characters= new Observable<CharactersResults[]>()
  episodeNumbers:string[] = []
  constructor(
    public dialogRef: MatDialogRef<EpisodeCardComponent>,
    @Inject(MAT_DIALOG_DATA) public episode: EpisodeResults,
    public GetCharactersService: GetCharacterService
  ) {
    this.episode.characters.forEach((character) => {
     this.episodeNumbers.push( character.slice(-1))
    })

    
    this.characters= this.GetCharactersService.getMultipleCharacters(this.episodeNumbers)
    
}
}
