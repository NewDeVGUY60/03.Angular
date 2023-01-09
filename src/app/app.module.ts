import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// il faut impoté formsmodule en dessous.
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    MonComposantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // add here formsModule for use it later.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
