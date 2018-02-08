import { RaceService } from './../../services/race.service';
import { Component, OnInit } from '@angular/core';
import { Poney } from '../../interfaces/poney'
import { HealthPipe } from '../../pipes/health.pipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  raceInterval
  ponies: Poney[]
  ponies$: Observable<Poney[]>
  raceId$: Observable<number>
  
  constructor(
    private healthPipe: HealthPipe,
    private raceService: RaceService,
    private routeParams: ActivatedRoute
  ) {}

  stopRace(winner?: Poney): void {
    clearInterval(this.raceInterval)

    if(!!winner) {
      console.log(`${winner.name} a gagné`)
    }
  }

  startRace(poneyIds: number[]): void {
    this.ponies$ = this.raceService.getPoniesById(poneyIds)

    this.ponies$.subscribe(ponies => {
      this.ponies = ponies

      this.raceInterval = setInterval(() => {
        
        this.ponies.forEach(poney => {
          let newDistance = Math.floor(Math.random()* 10)
          poney.distance += newDistance
        })
      }, 500)
    })
  }

  ngOnInit(): void {
    this.raceId$ = this.routeParams.params.map(params => {
      return <number>params.raceId
    })

    this.raceId$.subscribe(raceId => {

      let race = this.raceService.getRaceById(raceId)
  
      this.startRace(race.poneyIds)
    })
  }

  resetRaces() {
    this.stopRace()
    this.raceService.resetPonies()
  }

  ngOnDestroy() {
    this.resetRaces()
  }

}
