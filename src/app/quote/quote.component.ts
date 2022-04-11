import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  qoutes: Quote[] = [
    { id: 1, name: '"Live Everyday a Happy Life. Several years down the line, You will look back and say "I lived!""' },
    { id: 1, name: '"The fear of God is the beginning of Wisdom!"' },
    { id: 1, name: '"We fear the future because we are wasting today."' },
    { id: 1, name: '"Once a rular becomes religious,it becomes impossible for you to debate with him. Once someone rules in the name of religion, your lives become hell."' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
