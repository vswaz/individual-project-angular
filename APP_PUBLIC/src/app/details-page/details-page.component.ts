import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [BookServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private bookService: BookServiceService, private route: ActivatedRoute) { }
  newBook: Book = {
   
      _id:'',
      title: '',
      author: '',
      price: '',
      publisher: '',
      language: ''
  
    
  };

  pagecontent = {
    header: {
      title: '',
      body: ''
    }
  };


  ngOnInit(): void {
       this.route.params.pipe(switchMap((params: Params) => {
      return this.bookService.getSingleBook(params['bookid']);
    }))
      .subscribe((newBook: Book) => {
        console.log('Selected Book', newBook);
        this.newBook = newBook;
        this.pagecontent.header.title = newBook.title;
        this.pagecontent.header.body = 'Details for selected Book.';
      }
      );
  }

}
