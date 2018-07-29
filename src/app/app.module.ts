import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { MatSelectModule } from '@angular/material/select';
import { TeamListComponent } from './team-list/team-list.component';
import { UserService } from './../services/user.service';
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate  } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' ;
import { CustomFormsModule } from 'ng2-validation' ;
import { ReactiveFormsModule } from '@angular/forms';
import {UniqueUsernameValidatorDirective} from './../services/user-unique-validator.directive';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectNameComponent } from './project-name/project-name.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatNativeDateModule ,MatInputModule, MatFormFieldModule ,MatToolbarModule, MatDatepickerModule , MatButtonModule, MatSidenavModule, MatIconModule, MatListModule , MatCheckboxModule } from '@angular/material';



export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
      
    AppComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    UniqueUsernameValidatorDirective,
    LoginComponent,
    ServiceComponent,
    TeamListComponent,
    ProjectPageComponent,
    ProjectNameComponent,
    DashboardComponent
  
  
  ],
  imports: [

    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatListModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    HttpClientModule,
    FormsModule,
  JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
    ,
    RouterModule.forRoot([

      {path : '' , component : HomeComponent},     
      {path :'signup' ,  component : SignupComponent},
      {path :'login' ,  component : LoginComponent},
      {path :'team' ,  component : TeamListComponent , canActivate: [AuthGuardService] },
      {path :'ProjectName' ,  component :  ProjectNameComponent  , canActivate: [AuthGuardService] },
      {path :'ProjectPage' ,  component : ProjectPageComponent  ,  canActivate: [AuthGuardService] },
      {path :'service/:id' ,  component : ServiceComponent},
      {path :'dashboard' ,  component : DashboardComponent ,  canActivate: [AuthGuardService] },
      { path: '**', redirectTo: '' }
    ])
  ],
  
  providers: [

    UserService,
    JwtHelperService,
    AuthGuardService,
    AuthService

  ],
  bootstrap: [AppComponent]
  

})

export class AppModule { }
