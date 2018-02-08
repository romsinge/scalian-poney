import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';
import { Race } from '../interfaces/race';

@Injectable()
export class RaceService {

  constructor() { }

  ponies: Poney[] = [
    {
      id: 0,
      name: "Louis",
      distance: 0,
      image: "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif",
      isHealthy: true
    },
    {
      id: 1,
      name: "Serge",
      distance: 0,
      image: "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif",
      isHealthy: true
    },
    {
      id: 2,
      name: "Mathilde",
      distance: 0,
      image: "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif"
    },
    {
      id: 3,
      name: "Ragnar",
      distance: 0,
      image: "http://ponyracer.ninja-squad.com/assets/images/pony-blue-running.gif",
      isHealthy: true
    }
  ]

  races: Race[] = [
    {
      id: 0,
      name: "Tokyo",
      poneyIds: [0, 1, 2]
    },
    {
      id: 1,
      name: "Singapour",
      poneyIds: [0, 1, 3]
    },
    {
      id: 2,
      name: "New Delhi",
      poneyIds: [1, 2, 3]
    }
  ]

  getPonies(): Poney[] {
    return this.ponies
  }
  
  getPoniesById(poneyIds: number[]): Poney[] {
    return this.ponies.filter(poney => poneyIds.includes(poney.id))
  }

  getRaces(): Race[] {
    return this.races
  }

  getRaceById(id: number): Race {
    return this.races.find(race => {
      return race.id == id
    })
  }

}
