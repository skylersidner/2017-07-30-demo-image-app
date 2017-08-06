import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ImageList } from './components/image/image-list/image-list.component';
import { ImageListItem } from './components/image/image-list-item/image-list-item.component';
import { ImageDetail } from './components/image/image-detail/image-detail.component';
import { ImageService } from './services/image.service';
import { LoginService } from './services/login.service';

@NgModule({
  imports: [
      BrowserModule
  ],
  declarations: [
      AppComponent,
      ImageList,
      ImageListItem,
      ImageDetail
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
