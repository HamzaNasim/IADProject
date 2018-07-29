import { Router } from '@angular/router';
import { GlobalVariableService } from './../global-variable.service';

import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import { User } from './../../services/user-model';
import {HttpClient , HttpHeaders} from '@angular/common/http' ;
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  Project = {} ;
 


   Description = [
 
    
       {id: 1, name: "Marketing"},
       {id: 2, name: "Product"},
       {id: 3, name: "Design"},
       {id: 4, name: "Operations"},
       {id: 5, name: " HR"},
       {id: 6, name: " IT"},
       {id: 7, name: " Engineering"},
       {id: 8 , name: " General Project Management"},
     ];

     

  constructor(private userService : UserService , private global : GlobalVariableService , private router: Router) { }

  ngOnInit() {

     
        var userId = localStorage.getItem('userId');
        this.Project['userId'] = userId ;
  }





   ProjectDetails(registrationForm : NgForm){
    
    console.log(JSON.stringify(this.Project));
    
    this.userService.ProjectP(JSON.stringify(this.Project))
    .subscribe(

      data => {

      console.log(data);
      this.global.userId = data['userId'];
      this.router.navigate(['team']);

      }


    )
    
    }
}
