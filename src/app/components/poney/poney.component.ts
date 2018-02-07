import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Poney } from '../../interfaces/poney';

@Component({
  selector: 'app-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.css']
})
export class PoneyComponent {

  constructor(private el: ElementRef) {}

  @Input() poney: Poney = {
    name: "",
    id: 0,
    distance: 0,
    image: "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif"
  }

  @Output() win: EventEmitter<Poney> = new EventEmitter()

  ngDoCheck() {
    if (this.poney.distance >= 90) {
      this.win.emit(this.poney)
      this.el.nativeElement.style.backgroundColor = "gold"
    }
  }
}
