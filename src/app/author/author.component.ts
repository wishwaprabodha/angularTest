import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: any;
  constructor( private http: HttpClient) {
    http.get<any[]>('https://reqres.in/api/users?page=2')
      .subscribe(response => {
        // this.authors = response;
        console.log(response);
      });
  }

  ngOnInit() {
  }

}
