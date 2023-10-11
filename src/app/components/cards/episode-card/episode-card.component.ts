import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Episode } from 'src/app/interfaces/global/episode.interface';
import { EpisodeResults } from '../../../interfaces/results/episodeResults.interface';
import { MatDialog } from '@angular/material/dialog';
import { GetEpisodesService } from 'src/app/services/get-episodes.service';
import { EpisodesDialogComponent } from '../../dialogs/episodes-dialog/episodes-dialog.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css'],

})
export class EpisodeCardComponent implements AfterViewInit{
  episodes = new Observable<Episode>()
  displayedColumns: string[] = ['name', 'episode'];
 
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginatorRef!: MatPaginator;
  dataSource: EpisodeResults[] = []
  paginatorSize =16
  ;
  constructor(
    private GetEpisodesService: GetEpisodesService,
    public dialog: MatDialog,) {
       this.episodes = this.GetEpisodesService.getFilteredEpisodes().pipe(tap((episodes) => {
      this.dataSource = episodes.results 
      this.paginatorSize= episodes.info.count
    }))

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.paginator.page.subscribe((event) => {
    this.changePage(event.pageIndex);
      });
    }, 1000);
  
 
  }
  changePage(event:number) {
    this.episodes = this.GetEpisodesService.getFilteredEpisodes({page:event+1}).pipe(tap((episodes) => {
      this.dataSource = episodes.results 
      this.paginatorSize= episodes.info.count
    }))
    
  }
   compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  SortChange(sort: Sort) {
    
    const tableData= this.dataSource.slice()
    if (!sort.active || sort.direction === '') {
      this.dataSource = tableData;
      return;
    }
    this.dataSource = tableData.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name, b.name, isAsc);
   
        default:
          return 0;
      }
    });


   
  }
  openDialog(episode: EpisodeResults) {
    this.dialog.open(EpisodesDialogComponent, {
      data: episode
    })
  }
}
