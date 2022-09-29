import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username : new FormControl(null,Validators.required),
    password : new FormControl(null,Validators.required)
  })

  // username : string = "";
  // password : string = ""

  // onKeyUpUsername(){
  //   console.log(this.username);
  // }

  // onKeyUpPassword(){
  //   console.log(this.password);
  // }

  // getUsername(){
  //   return this.username;
  // }

  // getPassword(){
  //   return this.password;
  // }

}
