import { MatIconModule } from '@angular/material';

import { Router } from '@angular/router';
import { GlobalVariableService } from './../global-variable.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl  , NgForm} from '@angular/forms';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 p: number = 1;
  task = {};
  alltask = {};
   TeamId ;
   taskid ;
  newArray;  
  username ;
  
  member1 ;
  member2 ;
  member3 ;
  member4 ;
  teamarray = [];
 
  constructor( location: Location ,private userService : UserService , private global : GlobalVariableService , private router: Router) { }
userId;


  ngOnInit() {


   
        this.username = localStorage.getItem('uname');
         var userId = localStorage.getItem('userId');
  

     this.userService.getAlltask(userId)
    .subscribe(

      data => {
 
        this.global.userId = userId ;
        this.newArray = data;
        console.log(this.newArray);
       
       
  
      })

   
      this.userService.getUsername(userId)
      .subscribe(

         data => {
 
        this.global.userId = userId ;
        this.username = data;
       
      })


      this.userService.getTeam(userId)
      .subscribe(

        data => {

          this.global.userId = userId;
          this.member1 = data['member1'];
          this.member2 = data['member2'];
          this.member3 = data['member3'];
          this.member4 = data['member4'];

          this.teamarray.push({"name" : data['member1']});
          this.teamarray.push({"name" : data['member2']});
          this.teamarray.push({"name" : data['member3']});
          this.teamarray.push({"name" : data['member4']});
        
          console.log(this.teamarray);

        })

  }

 
    
      btnClicked(Id) {
        
        // this.userService.deletetask(id);
        console.log(Id);
        
      var index = this.newArray.findIndex(x => x.Id == Id);
      console.log(index);

        this.newArray.splice(index, 1);
        console.log(this.newArray);
        this.userService.deletetask(Id)
          .subscribe(
           data => {        
             console.log(data);
              // 
            
           }
      )
      
    }




    tasks(form){
   
    this.task['TeamId'] = this.global.userId ;
    form.value['TeamId'] = this.global.userId ;
  
    this.alltask = this.task ;
  
     this.newArray.push(form.value);
     this.userService.Task(JSON.stringify(this.task))
    .subscribe(

      data => {

        if(data['code'] === 200 ){
        
          console.log(data['Id']);
          this.taskid = data['Id'];
          this.task['Id']= data['Id'];
          console.log(this.newArray);
           form.reset();
           this.ngOnInit();
           this.teamarray = [];
        
        }
      })
    
    }


    logout(){

      localStorage.clear();   
      this.router.navigate(['']);
      this.userService.setUser(null);
      
    }


    
}
