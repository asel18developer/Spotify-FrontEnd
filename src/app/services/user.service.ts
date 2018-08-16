import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';


/*

  Definir el decorador Injectable para permitir que mediante injección de
  dependencias se pueda injectar en otros comoponentes o clases y as´ñi poder
  utilizarlo.

*/
@Injectable({
  providedIn: 'root',
})
export class UserService{

  public identity;
  public token;
  public url: string;

  constructor(private _http: Http){
    this.url = GLOBAL.url;
  }

  public getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (identity != "undefined") {
        this.identity = identity;
    } else {
        this.identity = null;
    }

    return this.identity;
  }

  public getToken(){
    let token = JSON.parse(localStorage.getItem('token'));

    if (token != "undefined") {
        this.token = token;
    } else {
        this.token = null;
    }

    return this.token;
  }
  public signup(user_to_login, gethash = null){

    if (gethash != null) {
        user_to_login.gethash = gethash
    }

    let params = JSON.stringify(user_to_login);

    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+"login", params, {headers: headers}).pipe(map(res => res.json()));

  }


}
