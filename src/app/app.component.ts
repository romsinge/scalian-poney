import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Poney } from './interfaces/poney'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label = 'Romain';
  title = `Monsieur ${this.label}`;

  ponies: Poney[] = [
    {
      id: 0,
      name: "Louis",
      distance: 0,
      image: "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
    },
    {
      id: 1,
      name: "Serge",
      distance: 0,
      image: "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif"
    },
    {
      id: 2,
      name: "Mathilde",
      distance: 0,
      image: "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    }
  ]

  ngOnInit() {
    let raceInterval = setInterval(() => {
      
      this.ponies.forEach(poney => {
        let newDistance = Math.floor(Math.random()* 10) 
        poney.distance += newDistance

        if (poney.distance >= 100) {
          clearInterval(raceInterval)
          console.log(`${poney.name} a gagné`)
        }
      })
    }, 500)
  }
}
