import { Router } from '@angular/router';
import { GlobalVariableService } from './../global-variable.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {HttpClient , HttpHeaders} from '@angular/common/http' ;

@Component({
  selector: 'app-project-name',
  templateUrl: './project-name.component.html',
  styleUrls: ['./project-name.component.css']
})
export class ProjectNameComponent implements OnInit {


  ProjName = {} ;
  ProjNameArray ;
  
  constructor(private userService : UserService , private global : GlobalVariableService , private router : Router) { }

   userId;

  ngOnInit() {

      
         this.userId = localStorage.getItem('userId');
     

  }

   ProjectName(registrationForm : NgForm){
    
    console.log(JSON.stringify(this.ProjName));
    this.ProjNameArray = JSON.stringify(this.ProjName) ;
      
    this.userService.projecName(this.userId,this.ProjNameArray)
    .subscribe(

      data => {

      console.log(data);
      this.router.navigate(['dashboard']);

      })
    
    }
}
