import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { TlhomepageComponent } from './component/login/team-leader/tlhomepage/tlhomepage.component';


const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'tlhomepage', component: TlhomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
