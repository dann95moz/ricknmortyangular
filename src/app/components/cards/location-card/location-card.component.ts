import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LocationResults } from 'src/app/interfaces/results/locationResult.interface';
import { GetLocationsService } from 'src/app/services/get-locations.service';
import { MatDialog } from '@angular/material/dialog';
import { Location } from 'src/app/interfaces/global/location.interface';
import { PlacesDialogComponent } from '../../dialogs/places-dialog/places-dialog.component';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  locations = new Observable<Location>()
  dataSource: LocationResults[] = []
  displayedColumns: string[] = ['name', 'type'];
  constructor(
    private GetLocationsService: GetLocationsService,
    public dialog: MatDialog) {
    this.locations = this.GetLocationsService.getFilteredLocations().pipe(tap((location) => {
      console.log(location);
      
      this.dataSource = location.results
    }))
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
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  openDialog(location: LocationResults) {
    this.dialog.open(PlacesDialogComponent,
      { data: location })
}
}
