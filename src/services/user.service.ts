import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders , HttpParams} from '@angular/common/http' ;
import { Observable,Subject , BehaviorSubject  } from "rxjs";




@Injectable({
  providedIn: 'root'
})

 export class UserService {
  private url = 'http://localhost:3000/users/';
  private user = new BehaviorSubject <any>(null);

  header = {

    headers: new HttpHeaders().set('Content-Type', 'application/json')
                              .set('Accept', 'application/json')
                              .set('Access-Control-Allow-Headers', 'Content-Type')

  }

  constructor(private http : HttpClient) { }

  signup(body: any) {

    return this.http.post('http://localhost:3000/users/signup', body, this.header);

  }

  getLoggedInUser(){
    return this.user.asObservable();
  }

  setUser(username){
    this.user.next(username);
  }



  ProjectP(body: any) {

    return this.http.post('http://localhost:3000/userDetails', body, this.header);


  }


  login(body: any) {

    return this.http.post('http://localhost:3000/users/login', body, this.header);

  }



  Activation(token: HttpParams) {

    return this.http.put('http://localhost:3000/users/activated/' + token, this.header);

  }


  teamEmail(id: string, body: any) {
    return this.http.put('http://localhost:3000/userDetails/emails/' + id, body, this.header);


  }


  projecName(id: string, body: any) {
    return this.http.put('http://localhost:3000/userDetails/ProjectName/' + id, body, this.header);


  }



  getAlltask(id: string) {
    return this.http.get('http://localhost:3000/tasks/' + id, this.header);
  }

  getUsername(id: string) {
    return this.http.get('http://localhost:3000/tasks/user/' + id, this.header);


  }


  getTeam(id: string) {
    return this.http.get('http://localhost:3000/tasks/allteam/' + id, this.header);


  }

  Task(body: any) {

    return this.http.post('http://localhost:3000/tasks', body, this.header);


  }

  getUserByUsername(uname: string) {

    return this.http.get<any[]>(`${this.url}username/${uname}`);

  }

  deletetask(id){

    return this.http.delete('http://localhost:3000/tasks/delete/'+id , {responseType:"text"});


  }

}