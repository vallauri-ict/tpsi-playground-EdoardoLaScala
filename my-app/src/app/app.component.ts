import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["BraK Obama","Lewis Hamilton","Scarlett Johanssonn","Antonio Conte",
          "Marcello Rossi","Alberto Barbero","La Scala Edoardo",
          "Pierbebbe lumignolo","Piefranco lostorpio","Pierpiero Pieretto"];
  myName = 'Edoardo La Scala';
  soprannome = "";
  changeName()
  {
    this.myName = this.names[this.getRandomInt(0, 10)];
  }


  getRandomInt(min ,max)
  {
    return Math.floor(Math.random()* (max - min) + min)
  }
}
