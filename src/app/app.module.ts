import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    SearchComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      { path: '/search', component: SearchComponent }
    ]),
  ]

})
export class _Module {

}
