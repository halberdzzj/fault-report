import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url: string = 'http://fault-report.gear.host/api/user/auth';

  getUser(user, pwd) {
    return this.http.post(this.url, { username: user, password: pwd })
  }

  
}
