import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home-component.component';
import {UserComponent} from './user/user.component';
import {BookComponent} from './book/book.component';
import {AuthorComponent} from './author/author.component';

  const APP_ROUTES: Routes = [
    {path : '', component: HomeComponent },
    {path : 'users', component: UserComponent},
    {path : 'books', component : BookComponent},
    {path : 'authors', component : AuthorComponent}
  ];
// register routes
export const routing = RouterModule.forRoot(APP_ROUTES);
