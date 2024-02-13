import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from '../registration/registration.model';

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    public notLoggedIn=new BehaviorSubject<boolean>(false);
    isLoggedIn$!: Observable<boolean>;
    us: Registration = new Registration();
    registration!: Registration;  
    private pswrd?:string;
    get isLoggedIn() {
      return this.loggedIn.asObservable();
    }
    get isnotLoggedIn() {
      return this.notLoggedIn.asObservable();
    }
  
    constructor(
      private router: Router
    ) {}
  
  login(reg:Registration){
    let result=0;
      if(reg.userName!==undefined){
      // this.regservice.getUserbyusername(reg.userName)
      //   .subscribe((rlst:Registration)=> {
          // if(this.loginuser!==undefined){
          this.us!.password="123";
          this.us!.userName="solaomotoso2002@yahoo.com";
          this.registration=reg;
          // this.pswrd =this.encservice.set('123456$#@$^@1ERF', reg.password);
          if (reg.userName === this.us?.userName && this.us?.password === reg?.password)
           {
              this.loggedIn.next(true);
              localStorage.setItem('user',JSON.stringify(this.registration));
              this.router.navigate(['../home']);
           }
        };
      }  
    logout() {
      this.loggedIn.next(false);
      this.router.navigate(['./login']);
    }
  }
  
