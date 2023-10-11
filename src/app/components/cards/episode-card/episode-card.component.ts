import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Episode } from 'src/app/interfaces/global/episode.interface';
import { EpisodeResults } from '../../../interfaces/results/episodeResults.interface';
import { MatDialog } from '@angular/material/dialog';
import { GetEpisodesService } from 'src/app/services/get-episodes.service';
import { EpisodesDialogComponent } from '../../dialogs/episodes-dialog/episodes-dialog.component';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent {
  episodes = new Observable<Episode>()
  displayedColumns: string[] = ['name', 'episode'];

  dataSource : EpisodeResults[] = []
  constructor(
    private GetEpisodesService: GetEpisodesService,
    public dialog: MatDialog) {
    this.episodes = this.GetEpisodesService.getFilteredEpisodes().pipe(tap((episodes) => {
      this.dataSource= episodes.results
  }))
}
  openDialog(episode: EpisodeResults) {
    this.dialog.open(EpisodesDialogComponent, {
      data: episode
    })
  }
}
