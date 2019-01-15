import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HomeComponent} from './home-component.component';
import {UserDetailComponent} from './user/user-details.component';
import {UserEditComponent} from './user/user-edit.component';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    UserDetailComponent,
    UserEditComponent,
    ContactComponent,
    BookComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
