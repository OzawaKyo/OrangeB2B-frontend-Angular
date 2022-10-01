import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { VoipComponent } from './voip/voip.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",redirectTo:"/orangeb2b",pathMatch:"full"},
  {path: "login" , component:LoginComponent },
  {path : "orangeb2b",canActivate:[AuthGuard],children:[
    {path : "",component:HomepageComponent},
    {path : "voip",component:VoipComponent}
  ]},
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,[RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
