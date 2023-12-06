import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {
  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber -1].title;
      this.description = this.cardAction[cardNumber -1].description;
    }
  }
   

  cardAction = [
    {title: 'Waterfall!', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 can stop drinking, etc.'},
    {title: '2 - You!', description: 'You decide who drinks'},
    {title: '3 - Me!', description: 'Congrats! Drink a shot'},
    {title: 'Category!', description: 'Come up with a category (e.g. colors) Each player must enumerate one item from the category.'},
    {title: '5 - Bust a jive!', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one'},
    {title: '6 - Chicks!', description: 'All girls drink.'},
    {title: '7 - Heaven!', description: 'Put your hands up! The last player drinks!'},
    {title: '8 - Mate!', description: 'Pick a mate. Your mate must always drink when you drink and the other way round.'},
    {title: 'Thumbmaster', description: 'The last person to put their thumb down (table, floor) drinks'},
    {title: '10 - Men', description: 'All men drink'},
    {title: 'Quizmaster', description: 'You are the quizmaster. Anyone who answers to your questions has to drink. You are the quizmaster until someone else becomes the quizmaster'},
    {title: 'Never have I ever...', description: 'Say something oyu never did. Anyone who did it has to drink '},
    {title: 'Rule', description: 'Make a rule. Everone who breaks the rule has to drink'},
  ]

  title: string = '';
  description: string = '';
  @Input() card: string | undefined;

  constructor() {}

}
