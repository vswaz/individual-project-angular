import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Book } from './book';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private booksUrl = 'http://localhost:3000/api/books';
  constructor(private http:HttpClient) { }
  getSingleBook(bookId: string): Promise<void | Book>{
    return this.http.get(this.booksUrl + '/' + bookId)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
  }
  getBooks() : Promise<void | Book[]>{
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => response as Book[])
      .catch(this.handleError);
  }
  createBook(newBook: Book): Promise<void | Book>{
    return this.http.post(this.booksUrl, newBook)
      .toPromise()
      .then(response => response as Book)
      .catch(this.handleError);
  }
  private handleError(error: any){
    console.log("error");
  }
}
