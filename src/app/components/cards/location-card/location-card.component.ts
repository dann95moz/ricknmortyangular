import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LocationResults } from 'src/app/interfaces/results/locationResult.interface';
import { GetLocationsService } from 'src/app/services/get-locations.service';
import { MatDialog } from '@angular/material/dialog';
import { Location } from 'src/app/interfaces/global/location.interface';
import { PlacesDialogComponent } from '../../dialogs/places-dialog/places-dialog.component';

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
  openDialog(location: LocationResults) {
    this.dialog.open(PlacesDialogComponent,
      { data: location })
}
}
