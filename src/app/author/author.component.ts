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
    http.get<any[]>('http://localhost:3000/api/authors')
      .subscribe((res: any[]) => {
        console.log(res);
        this.au = res;
      });
  }

}
