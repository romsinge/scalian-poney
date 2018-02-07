import { RaceService } from './../../services/race.service';
import { Component, OnInit } from '@angular/core';
import { Poney } from '../../interfaces/poney'
import { HealthPipe } from '../../pipes/health.pipe';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  raceInterval
  ponies: Poney[]
  
  constructor(
    private healthPipe: HealthPipe,
    private raceService: RaceService
  ) {}

  handleClick(): void {
    console.log("coucou")
  }

  stopRace(winner: Poney): void {
    clearInterval(this.raceInterval)
    console.log(`${winner.name} a gagné`)
  }

  displayHealthyPonies(): void {
    let healthyPonies: Poney[] = this.healthPipe.transform(this.ponies)
    console.log(healthyPonies)
  }

  ngOnInit(): void {
    this.ponies = this.raceService.getPonies()

    this.raceInterval = setInterval(() => {
      
      this.ponies.forEach(poney => {
        let newDistance = Math.floor(Math.random()* 10)
        poney.distance += newDistance
      })
    }, 500)
  }

}
