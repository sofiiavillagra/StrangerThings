import {Component} from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent{
  

  public characters = [
      {Actor: 'Winona Ryder',character: 'Joyce Byers'},
      {Actor: 'David Harbou' ,character: 'Jim Hopper'},
      {Actor: 'Millie Bobby',character: 'Brown Once'},
      {Actor: 'Finn Wolfhar',character: 'Mike Wheeler'},
      {Actor: 'Gaten Matarao' ,character: 'Dustin Henderson'},
      {Actor: 'Caleb McLaugin' ,character:'Lucas Sinclair'},
      {Actor: 'Noah Schnapp',character:'Will Byers'},
      {Actor: 'Natalia Dyer',character: 'Nancy Wheeler'},
      {Actor: 'Joe Keery' , character: 'Steve Harrington'},
      {Actor: 'Charlie Heat',character: 'Jonathan Byers'},
      {Actor: 'Cara Buono', character: 'Karen Wheeler'},
      {Actor: 'Matthew Modi',character: 'Dr. Martin Brenner'}
    ]
    }

