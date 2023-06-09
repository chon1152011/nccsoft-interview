import { Component, Input, OnInit } from '@angular/core';
import { Card } from './interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: Card = {};
}
