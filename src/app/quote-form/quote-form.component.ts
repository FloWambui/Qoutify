import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  [x: string]: any;
  newQuote = new Quote(0, "", "", "", new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(quoteForm:NgForm):void{
    this.addQuote.emit(this.newQuote);{
    quoteForm.reset();
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
