import { GlobalVariableService } from './../global-variable.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from "@angular/router";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  username;
  uid;
  user = {};
  failMess;
  succMess;

  constructor(private userService: UserService, private router: Router, private global: GlobalVariableService) {


  }

  ngOnInit() { }


  login() {

    console.log(JSON.stringify(this.user));

    this.userService.login(JSON.stringify(this.user))
      .subscribe(

      data => {

        if (data['code'] === 200) {
            localStorage.setItem('user', JSON.stringify(data['User']));

          localStorage.setItem('userId', data['id']);
          localStorage.setItem('token', data['token']);
          localStorage.setItem('uname', data['User']);

          this.userService.setUser(localStorage.getItem('uname'));

          this.global.uname = data['User'];
          this.global.userId = data['id'];
          this.uid = data['id'];
          this.succMess = data['message'];
          this.username = data['User'];
          this.global.uname = this.username;
          

          setTimeout((router) => {
            this.router.navigate(['dashboard']);

          }, 2000);  //5s

        }

        else {

          this.failMess = data['message'];

        }
        console.log(data);
      })
  }

}
