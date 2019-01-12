import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public svc: CommonService, private router: Router, private auth: AuthService) { }
  // username: string;
  // password: string;

  ngOnInit() {
  }

  loginUser(event) {
    console.log(event);
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username, password);
    this.auth.getUser(username, password).subscribe(data => {
      console.log(data);
      
    }, err => {
      console.log(err);
    });

  }

}
