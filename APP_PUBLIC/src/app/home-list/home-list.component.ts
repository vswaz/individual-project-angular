import { Component, OnInit } from '@angular/core';

import { Book} from '../book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [BookServiceService] 
})

export class HomeListComponent implements OnInit {
  books: Book[]
  
  constructor( private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.bookService
      .getFoods()
      .then((books: Book[]) => {
        this.books = books.map(book => {
          return book;
        });
      });
  }

}
