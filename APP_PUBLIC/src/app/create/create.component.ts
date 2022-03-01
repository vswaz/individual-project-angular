import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [BookServiceService]
})
export class CreateComponent implements OnInit {

  public newBook: Book = {
    _id:'',
    title: '',
    author: '',
    price: '',
    publisher: '',
    language: ''

  }
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }
  public createNewBook(newBook: Book): void{
    this.bookService.createBook(newBook);
  }
}
