import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../../shared/models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;
  @Output() clicked: EventEmitter<void> = new EventEmitter();

  constructor() {}
}
