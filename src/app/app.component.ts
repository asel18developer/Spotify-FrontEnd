import { Component, OnInit } from '@angular/core';
import { User } from './models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  public title = 'Jesfy';
  public user: User;
  public identity;
  public token;

  constructor(
  ){
    this.user = new User('','','','','','ROLE_USER','');
  }

  /*
  Metodo que se ejecuta siempre cuando se carga el componente
  */
  ngOnInit(){

  }

  public onSubmit(){

    console.log(this.user);

  }
}
