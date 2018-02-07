import { Injectable } from '@angular/core';
import { Poney } from '../interfaces/poney';

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

  getPonies(): Poney[] {
    return this.ponies
  }

}
