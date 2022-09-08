import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/domain/login-details';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindetails : LoginDetails= new LoginDetails();
  

  constructor(private loginService: LoginService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  login()
  {
    console.log("In login()");
    console.log(this.logindetails);
    this.loginService.login(this.logindetails).subscribe
    (
      data=>{
        this.logindetails=data;
        console.log(this.logindetails);
         //  this.router.navigate(['tlhomepage']);
        if(this.logindetails.designation === 'Team leader'){
          this.router.navigate(['tlhomepage']);
        }
        
      }
    )
    
  }

 
  

}
