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
@Injectable
export class UserService{

  public url: string;

  public constructor(private _http:Http){
    this.url = GLOBAL.url;
  }

  public signup(){
    return 'Funcionado'
  }

}
