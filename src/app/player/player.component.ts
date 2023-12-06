import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() name!: string; // Explicitly defining 'name' as a string type
  @Input() playerActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
