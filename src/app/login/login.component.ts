import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { __values } from 'tslib';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService,
              private tokenService:TokenService,
              private router : Router,
              private accountService: AccountService) {
                console.log(this.loginForm.value);

               }

  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    login : new FormControl( "",Validators.required),
    password : new FormControl("",Validators.required)
  })

  login(){
    this.authService.login(this.loginForm.getRawValue()).subscribe(res => this.handleResponse(res))
  }

  handleResponse(res: any){
    this.tokenService.handle(res)
    this.accountService.changeAuthStatus(true);
    this.router.navigateByUrl("/orangeb2b")
    console.log(res);
    console.log(this.loginForm.value);



  }

}
