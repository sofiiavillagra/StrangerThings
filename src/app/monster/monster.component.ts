import { Component, Input} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent {
 @Input ()
 color: ThemePalette

 public monster:string[] = ['Demogorgos', 'Mind Flyers', 'Vecna']
 
}
