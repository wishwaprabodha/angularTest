import { Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = [{id: 1, name: 'wishwa'},
    {id: 2, name: 'prabodha'}];
  log(x: string) {
    console.log(x);
  }
  submit(x: string) {
    console.log(x);
  }
}
