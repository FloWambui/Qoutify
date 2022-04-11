import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  qoutes: Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', 'Flo Wambui',new Date(2020, 3, 14)),
    new Quote(2, '"Live Everyday a Happy Life. Several years down the line, You will look back and say "I lived!""', 'Eric Thomas', 'Flo Wambui',new Date(2022, 0, 1)),
    new Quote(3, '"The fear of God is the beginning of Wisdom!"', 'King Solomon', 'Flo Wambui',new Date(1600, 0, 1)),
    new Quote(4, '"We fear the future because we are wasting today."', 'Mother Teresa', 'Flo Wambui',new Date(1997, 8, 5)),
    new Quote(5, '"Once a rular becomes religious,it becomes impossible for you to debate with him. Once someone rules in the name of religion, your lives become hell."', 'Muammar al-Gaddafi', 'Flo Wambui',new Date(2011, 9, 25)),
  ];
  toggleDetails(index: any) {
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  };
  completeQuote(isComplete: any, index: any) {
    if ('isComplate') {
      this.qoutes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
