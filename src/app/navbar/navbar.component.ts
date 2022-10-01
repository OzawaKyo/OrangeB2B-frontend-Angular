import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  currentUser: null | undefined;

  constructor(private accountService: AccountService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit(): void {

    this.accountService.authStatus.subscribe(res=> {
      this.currentUser = this.tokenService.getInfos();
    })
  }
  logout(){
    this.tokenService.remove();
    this.accountService.changeAuthStatus(false);
    this.router.navigateByUrl("/login");
  }

}
