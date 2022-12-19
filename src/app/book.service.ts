import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book'



@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080/books');
  }

  getBook(id: number): Observable<Book>{
    return this.http.get<Book>('http://localhost:8080/book/$(id)');
  }
}
