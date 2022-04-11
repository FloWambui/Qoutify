import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  qoutes: Quote[] = [
   new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'Flo Wambui'),
   new Quote (1,'"Live Everyday a Happy Life. Several years down the line, You will look back and say "I lived!""', 'Eric Thomas', 'Flo Wambui'),
   new Quote(2, '"The fear of God is the beginning of Wisdom!"', 'King Solomon', 'Flo Wambui' ),
   new Quote (3, '"We fear the future because we are wasting today."','Mother Teresa', 'Flo Wambui'),
   new Quote (4, '"Once a rular becomes religious,it becomes impossible for you to debate with him. Once someone rules in the name of religion, your lives become hell."', 'Muammar al-Gaddafi' , 'Flo Wambui'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
