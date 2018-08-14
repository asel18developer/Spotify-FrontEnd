import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';

@NgModule({

  /* Declarations: Set component, directives and pipes*/
  declarations: [
    AppComponent
  ],
  /* Imports: Set modules */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  /* Providers: Set services */
  providers: [],
  /* Bootstrap: Set the principal component of project */
  bootstrap: [AppComponent]
})
export class AppModule { }
