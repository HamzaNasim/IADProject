import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { GlobalVariableService } from './../global-variable.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 username;
ayaz = false;
 
  constructor(private location: Location ,private _userService:UserService, private global : GlobalVariableService , private router : Router) {

  //  this.username =  localStorage.getItem('uname');

   }

  ngOnInit() {

    this._userService.getLoggedInUser().subscribe((res) => {
      this.username = res;
      console.log(this.username);


    })
     this.username =  localStorage.getItem('user');
    
  }
  
}
