import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { ChipComponent } from './chip/chip.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DateComponent } from './date/date.component';
import { ColourPipe } from './colour.pipe';

const routes: Routes = [

  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },

];

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    SearchComponent,
    FilterComponent,
    CardComponent,
    ChipComponent,
    CheckboxComponent,
    DropdownComponent,
    DateComponent,
    ColourPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  bootstrap: [AppComponent]

})
export class AppModule {

}
