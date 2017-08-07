import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { List } from './components/list/list.component';
import { ListItem } from './components/list-item/list-item.component';
import { Detail } from './components/detail/detail.component';
import { Comments } from './components/comments/comments.component';
import { Login } from './components/login/login.component';

import { ImageService } from './services/image.service';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
      BrowserModule
  ],
  declarations: [
      AppComponent,
      List,
      ListItem,
      Detail,
      Comments,
      Login
  ],
  providers: [
      ImageService,
      LoginService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
