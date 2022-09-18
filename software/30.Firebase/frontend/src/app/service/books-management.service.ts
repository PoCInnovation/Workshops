import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { book } from '../model/book.model';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class BooksManagementService {
  private books: book[] = [];
  booksSubject = new BehaviorSubject(this.books);
  constructor(private httpRequest: HttpRequestService) { }

  private shareBooksSubject() {
    this.booksSubject.next([...this.books]);
  }

  public async getBooks(): Promise<void> {
    const data = await this.httpRequest.get('http://localhost:4000/books');
    this.books = data.data;
    this.shareBooksSubject();
  }

  public async addBooks(body: book): Promise<void> {
    await this.httpRequest.post('http://localhost:4000/addBooks', body);
    this.getBooks();
  }

}
