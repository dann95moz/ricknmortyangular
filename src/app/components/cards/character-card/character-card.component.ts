import { Component, ViewChild } from '@angular/core';
import { Observable , tap} from 'rxjs';
import { Characters } from 'src/app/interfaces/global/characters.interface';
import { GetCharacterService } from 'src/app/services/get-character.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CharacterDialogComponent } from '../../dialogs/character-dialog/character-dialog.component';
import { CharactersResults } from 'src/app/interfaces/results/characterResults.interface';
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { filterCharacter } from 'src/app/interfaces/filters/filterCharacter.interface';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  characters = new Observable<Characters>()
  status?: string
  gender?: string
  filters: FormGroup
  sortBy = ''
  paginatorSize= 16
  constructor(
    private GetCharacterService: GetCharacterService,
    public dialog: MatDialog
  ) {
  
    this.filters = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      status: new FormControl(),
      page: new FormControl(1)
    })
    this.characters = this.GetCharacterService.getFilteredCharacters().pipe(tap((characters) => {
      this.paginatorSize=  characters.info.count
    }))
    this.filters.valueChanges
    .pipe(debounceTime(500))
      .subscribe(value => {
        const filteredValue = Object.keys(value)
    .filter(key => value[key] !== null && value[key] !== undefined && value[key] !== '')
          .reduce((obj: filterCharacter, key: string) => {
            const filterKey = key as keyof filterCharacter;
      obj[filterKey] = value[key];
      return obj;
    }, {});
console.log(value);

        this.characters = this.GetCharacterService.getFilteredCharacters(
        filteredValue
        ).pipe(tap((characters) => {
       this.paginatorSize= characters.info.count
      }))
      
      
    });

  }
  ngAfterViewInit(): void {
   setTimeout(() => {
     
     this.paginator.page.subscribe((event) => {
       console.log('La página cambió a: ' + event.pageIndex);
   this.changePage(event.pageIndex);
     });
   }, 1000);
 

  }
  changePage(event:number) {
    this.filters.get('page')?.patchValue(event+1)
    console.log( this.filters.get('page')?.value);
    
  }

  openDialog(character:CharactersResults) {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      data: character
    })
    
  }
}
