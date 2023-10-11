import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCardComponent } from './components/cards/character-card/character-card.component';
import { LocationCardComponent } from './components/cards/location-card/location-card.component';
import { EpisodeCardComponent } from './components/cards/episode-card/episode-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  
  { path: 'characters', component: CharacterCardComponent },
  { path: 'locations', component: LocationCardComponent },
  {path: 'episodes', component: EpisodeCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
