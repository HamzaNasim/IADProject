import { GlobalVariableService } from './../global-variable.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpHeaders , HttpParams} from '@angular/common/http' ;
import { UserService } from './../../services/user.service';
import {ActivatedRoute , Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {

  resMessage ;
  failMessage;
  

  constructor(private global :  GlobalVariableService ,private userService : UserService , private route : ActivatedRoute , private router: Router) { 

    var par = this.route.params.subscribe( params => console.log(params));
       
  }

  ngOnInit() {

      var routeParams = this.route.snapshot.params;
      console.log(routeParams.id);
      
 
    this.userService.Activation(routeParams.id)
    .subscribe(

      data => {

        localStorage.setItem('user', JSON.stringify(data['User']));
        localStorage.setItem('userId', data['userId']);
        localStorage.setItem('token', data['token']);
        localStorage.setItem('uname', data['User']);
        this.userService.setUser(localStorage.getItem('uname'));
        var userId = localStorage.getItem('userId');

         if(data['success'] === true ){
           console.log(data['userId']);
            this.global.userId = userId;
            console.log(this.global.userId);
            
           this.resMessage = data['message'];
           setTimeout((router) => {
            
            this.router.navigate(['ProjectPage']);
          }, 4000);  //4s
         }

         else {

           this.failMessage = data['message'];
           setTimeout((router) => {
             this.router.navigate(['signup']);
           }, 4000);  //8s


         }
      
    });

  }
}