import { Pipe, PipeTransform } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Pipe({
  name: 'health'
})
export class HealthPipe implements PipeTransform {

  transform(ponies: Poney[], args?: any): Poney[] {
    return ponies.filter(poney => poney.isHealthy)
  }

}
