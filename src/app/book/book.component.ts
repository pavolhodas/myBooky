import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void{
    this.bookService.getBooks()
        .subscribe(books => this.books = books)
  }

  gotoHome(homePage:string):void{
    this.router.navigate([`${homePage}`]);
  }

  getBookById(id: number): void{
    this.bookService.getBook(id)
        .subscribe();
  }
}
