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

  login(){
    alert("loged in");
  }

}
