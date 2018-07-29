import { ActivatedRoute } from '@angular/router';
import { GlobalVariableService } from './../global-variable.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http' ;
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  member = {} ;
  memArray = {} ;

  constructor(private userService : UserService , private global : GlobalVariableService , private route : ActivatedRoute ,private router : Router) { }
userId;
  ngOnInit() {



       this.userId = localStorage.getItem('userId');
        
    
  }


   Members(registrationForm : NgForm){
    
    console.log(JSON.stringify(this.member));
    this.memArray = JSON.stringify(this.member) ;
      
    this.userService.teamEmail(this.userId,this.memArray)
    .subscribe(

      data => {

      console.log(data);
      this.router.navigate(['ProjectName']);

      }


    )
    
    }
 

   







}
