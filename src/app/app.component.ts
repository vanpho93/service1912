import { Component, OnInit } from '@angular/core';
import { WordService } from './services/word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WordService]
})

export class AppComponent implements OnInit {
  constructor(private wordService: WordService) {}
  title = 'app';
  ngOnInit() {
    this.wordService.getAllWords();
  }
}
