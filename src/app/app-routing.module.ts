import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { VoipComponent } from './voip/voip.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateComponent } from './create/create.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { DataComponent } from './data/data.component';
import { WifiComponent } from './wifi/wifi.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {path:"",redirectTo:"/orangeb2b",pathMatch:"full"},
  {path: "login" , component:LoginComponent },
  {path : "orangeb2b",canActivate:[AuthGuard],children:[
    {path : "",component:HomepageComponent},
    {path : "voip",component:VoipComponent},
    {path : "data",component:DataComponent},
    {path : "wifi",component:WifiComponent},
    {path : "switch_wifi_tel",component:SwitchComponent},
    {path:"create",component:CreateComponent},
    { path: 'consulter/:Id', component: ConsulterComponent }
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
