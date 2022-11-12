import { Component } from '@angular/core';
import { CharactersComponent } from '../characters/characters.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {
  public characters = [
    {actor: 'Winona Ryder',character: 'Joyce Byers'},
    {actor: 'David Harbou' ,character: 'Jim Hopper'},
    {actor: 'Millie Bobby',character: 'Brown Once'},
    {actor: 'Finn Wolfhar',character: 'Mike Wheeler'},
    {actor: 'Gaten Matarao' ,character: 'Dustin Henderson'},
    {actor: 'Caleb McLaugin' ,character:'Lucas Sinclair'},
    {actor: 'Noah Schnapp',character:'Will Byers'},
    {actor: 'Natalia Dyer',character: 'Nancy Wheeler'},
    {actor: 'Joe Keery' , character: 'Steve Harrington'},
    {actor: 'Charlie Heat',character: 'Jonathan Byers'},
    {actor: 'Cara Buono', character: 'Karen Wheeler'},
    {actor: 'Matthew Modi',character: 'Dr. Martin Brenner'}
  ]
  displayedColumns: string[] = ['position','name'];
  dataSource = this.characters;
}
