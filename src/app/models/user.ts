/*
  Forma de crear la clase convecional
*/
export class User{

  constructor(
    public _id: string,
    public name: string,
    public surname: string,
    public mail: string,
    public password: string,
    public role: string,
    public image: string
  ){}

}
