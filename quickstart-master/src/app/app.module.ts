import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ImageList } from './components/image-list/image-list.component';
import { ImageDetail } from './components/image-detail/image-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      AppComponent,
      ImageList,
      ImageDetail
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
