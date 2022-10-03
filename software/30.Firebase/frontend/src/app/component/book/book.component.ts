import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { book } from 'src/app/model/book.model';
import { BooksManagementService } from 'src/app/service/books-management.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookList!: book[];
  private subBook!: Subscription;

  constructor(private booksManagementService: BooksManagementService) {
    this.subBook = booksManagementService.booksSubject.subscribe(
      (data: book[]) => {
        this.bookList = data;
      }
    );
  }

  ngOnInit(): void {
    this.booksManagementService.getBooks();
  }
}
