import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  
  likes!:number;
  dislikes!: number;

  quoteDelete(complete:boolean): void{
    this.isComplete.emit(complete);
  }

  constructor() {
    this.likes =0;
    this.dislikes =0;
  }

  upVote(): boolean{
    this.likes +=1;
    return false;
  }

  downVote(): boolean{
    this.dislikes +=1;
    return false;
  }

  ngOnInit(): void {
  }

}
