import { Injectable } from '@angular/core';
import { user } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  user_login :user;

  login(name, pwd){
    this.user_login.username = name;
    this.user_login.password = pwd;
    console.log(this.user_login)

  }
}
