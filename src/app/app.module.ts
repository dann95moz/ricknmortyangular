import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { CharacterCardComponent } from './components/cards/character-card/character-card.component';
import { EpisodeCardComponent } from './components/cards/episode-card/episode-card.component';
import { LocationCardComponent } from './components/cards/location-card/location-card.component';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';
import { CharacterDialogComponent } from './components/dialogs/character-dialog/character-dialog.component';
import { PlacesDialogComponent } from './components/dialogs/places-dialog/places-dialog.component';
import { EpisodesDialogComponent } from './components/dialogs/episodes-dialog/episodes-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SortCharactersPipe } from './pipes/sort-characters.pipe';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterCardComponent,
    EpisodeCardComponent,
    LocationCardComponent,
    CharacterDialogComponent,
    PlacesDialogComponent,
    EpisodesDialogComponent,
    SortCharactersPipe,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,
    MatCardModule, MatChipsModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
