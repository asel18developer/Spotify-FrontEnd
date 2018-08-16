import { Component, OnInit } from '@angular/core';
import { User } from './models/user'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})

export class AppComponent implements OnInit{
  public title = 'Jesfy';
  public user: User;
  public identity;
  public token;
  public errorMessage;

  constructor(
    private _userService: UserService
  ){
    this.user = new User('','','','','','ROLE_USER','');
  }

  /*
  Metodo que se ejecuta siempre cuando se carga el componente
  */
  ngOnInit(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    console.log("Token: "+this.token);
    console.log("Identity: "+JSON.stringify(this.identity));
  }

  public onSubmit(){

    console.log("Se envían los datos del usuario: "+this.user)

    // Conseguir los datos del usuario identificado
    this._userService.signup(this.user).subscribe(
      response => {

        this.identity = response.user;

        if (!this.identity._id) {
            alert("EL usuario no esta correctamente identificado")
        }else{

          // Crear sesion en localsotrage para tener al usuario en sesión
          localStorage.setItem('identity', JSON.stringify(this.identity));

          // Conseguir el token, para enviarselo a cada petición http
            this._userService.signup(this.user, true).subscribe(
              response => {

                this.token = response.token;

                if (this.token.length <= 0) {

                    alert("EL token no se ha generado correctamente")

                }else{

                  // Crear sesion en localsotrage para tener el token en sesión
                  localStorage.setItem('token', JSON.stringify(this.token));
                }
              },
              error => {

                var receivedError = <any> error;

                if (receivedError != null) {
                    var bodyError = JSON.parse(error._body);
                    this.errorMessage = bodyError.message;
                    console.log(error);
                }
              }
            );

        }
      },
      error => {

        var receivedError = <any> error;

        if (receivedError != null) {
            var bodyError = JSON.parse(error._body);
            this.errorMessage = bodyError.message;
            console.log(error);
        }
      }
    );

  }
}
