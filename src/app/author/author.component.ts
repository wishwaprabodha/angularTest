import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  au: any[] = [];


  constructor(private http: HttpClient) {
    this.viewAuthors();
  }

  viewAuthors() {
    this.http.get<any[]>('http://localhost:3000/api/authors')
      .subscribe((res: any[]) => {
        console.log(res);
        this.au = res;
      });
  }

  addAuthor(fg: any) {
    this.http.post('http://localhost:3000/api/authors', fg)
      .subscribe(res => {
        console.log(res);
      });


    }


}
