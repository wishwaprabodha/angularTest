import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {


  authors: Object;

  constructor( private http: HttpClient) {
    http.get('https://reqres.in/api/users?page=2')
      .subscribe(response => {
         this.authors = response;
        console.log(this.authors);

      });
  }

  ngOnInit() {
  }

}
