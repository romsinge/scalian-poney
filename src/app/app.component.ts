import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Poney } from './interfaces/poney'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label: string = 'Romain';
  title: string = `the Race`;
  raceInterval

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

  handleClick(): void {
    console.log("coucou")
  }

  stopRace(winner: Poney): void {
    clearInterval(this.raceInterval)
    console.log(`${winner.name} a gagné`)
  }

  ngOnInit(): void {
    this.raceInterval = setInterval(() => {
      
      this.ponies.forEach(poney => {
        let newDistance = Math.floor(Math.random()* 10)
        poney.distance += newDistance
      })
    }, 500)
  }
}
