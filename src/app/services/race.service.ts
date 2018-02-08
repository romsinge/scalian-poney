import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  ponies: Poney[] = []

  races: Race[] = []

  getPonies(): Poney[] {
    return this.ponies
  }
  
  getPoniesById(poneyIds: number[]): Observable<Poney[]> {
    let ponies$ = this.http.get('http://localhost:3000/ponies').map(response => {
      return <Poney[]>response.json()
    }).map(ponies => {
      return ponies.filter(poney => {
        return poneyIds.includes(poney.id)
      })
    })

    ponies$.subscribe(ponies => {
      this.ponies = ponies
    })

    return ponies$
  }

  getRaces(): Observable<Race[]> {
    let races$ = this.http.get('http://localhost:3000/races').map(response => {
      return <Race[]>response.json()
    })

    races$.subscribe(races => {
      this.races = races
    })

    return races$
  }

  getRaceById(id: number): Race {
    return this.races.find(race => {
      return race.id == id
    })
  }

  resetPonies() {
    this.ponies.forEach(poney => {
      poney.distance = 0
    })
  }
}
